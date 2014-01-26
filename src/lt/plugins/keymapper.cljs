(ns lt.plugins.keymapper
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.keyboard :as keyboard]
            [lt.objs.tabs :as tabs]
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

(defui keymap-panel [this]
  [:div {:id "keymapper"}
   [:h1 "Keymapper" ]
   [:ul (bound keyboard/key-map
               #(map (fn [item]
               (keymap-item this item))
             ;; NEED TO BIND THIS FOR CHANGES.
             %))]])

(object/object* ::keymapper
                :tags [:keymapper]
                :name "keymapper"
                :init (fn [this]
                        (.log js/console "HELLO")
                        (keymap-panel this)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(def keymapper (object/create ::keymapper))

(cmd/command {:command :keymapper.show
              :desc "Keymapper: Show Keymap"
              :exec (fn []
                      (tabs/add-or-focus! keymapper))})
