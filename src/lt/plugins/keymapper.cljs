(ns lt.plugins.keymapper
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.keyboard :as keyboard]
            [lt.objs.tabs :as tabs])
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
   [:ul (map (fn [item]
               (keymap-item this item))
             @keyboard/key-map)]])

(object/object* ::keymapper.hello
                :tags [:keymapper.hello]
                :name "keymapper"
                :init (fn [this]
                        (keymap-panel this)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(def hello (object/create ::keymapper.hello))

(cmd/command {:command ::say-hello
              :desc "Keymapper: Say Hello"
              :exec (fn []
                      (tabs/add-or-focus! hello))})
