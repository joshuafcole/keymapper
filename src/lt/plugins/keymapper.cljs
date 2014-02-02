(ns lt.plugins.keymapper
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.keyboard :as keyboard]
            [lt.objs.tabs :as tabs]
            [lt.util.dom :as dom]
            [crate.binding :refer [bound]])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui keymap-item [this item]
  (let [keys (first item)
        cmds (second item)]
    [:li
     [:label (map (fn [key]
                    [:span key " "])
                  (.split keys #"\s"))]
     [:span {:class "command"}
      (map (fn [cmd]
             [:span (print-str cmd) " "])
           cmds)]]))

(defui keymap-list [this keys]
  [:ul.keymapper-list (map (partial keymap-item this) keys)])

(defui keymap-panel [this]
  [:div {:id "keymapper"}
   [:h1 "Keymapper" ]
   [:ul.keymapper-list]])

(object/object* ::keymapper
                :tags [:keymapper]
                :name "keymapper"
                :init (fn [this]
                        (keymap-panel this)))

(behavior ::update!
          :triggers #{:update!}
          :debounce 200
          :reaction (fn [this keys]
                      (dom/replace-with (dom/$ :.keymapper-list (object/->content this))
                                        (keymap-list this keys))))

(behavior ::unwatch
          :triggers #{::unwatch}
          :desc "Keymapper: Stop listening for key changes"
          :reaction (fn [this]
                      (remove-watch keyboard/key-map ::keymapper)))

(behavior ::watch
          :triggers #{::watch}
          :desc "Keymapper: Listen for key changes"
          :reaction (fn [this]
                      (add-watch keyboard/key-map ::keymapper (fn [_ _ _ cur]
                                                                (object/raise this :update! cur)))
                      (object/raise this :update! @keyboard/key-map)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this ::unwatch)
                      (tabs/rem! this)))

(def keymapper (object/create ::keymapper))

(cmd/command {:command :keymapper.show
              :desc "Keymapper: Show Keymap"
              :exec (fn []
                      (object/raise keymapper ::watch)
                      (tabs/add-or-focus! keymapper))})
