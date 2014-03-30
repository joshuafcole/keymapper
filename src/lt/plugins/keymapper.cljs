(ns lt.plugins.keymapper
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.keyboard :as keyboard]
            [lt.objs.tabs :as tabs]
            [lt.util.dom :as dom]
            [crate.binding :refer [bound]])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn- separate [f seq]
  [(filter f seq)
   (filter (complement f) seq)])

(def facets
  (atom [{:name "All"
          :matchers [#"."]}]))

(defn put-items-into-facets [items facets]
  (loop [processed [], items items
       [{:as h :keys [matchers]} & tail :as unprocessed]
         (->> facets (map (partial conj {:matched []}))
                     (sort-by :eval-order))]
  (if (empty? unprocessed) (sort-by :display-order processed)
    (let [matcher     #(some (fn [x y] (re-find x %)) matchers) ;; TODO generic function
          [match nope] (separate matcher items)]
      (recur (conj processed (assoc h :matched match)) nope tail)))))

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

(defui keymap-facets [this items]
  [:div {:id "facets"}
   (for [{:keys [name matched hide]} (put-items-into-facets items @facets)]
     (when (not hide)
       [:div {:class "facet"}
      [:h2 (str name " - " (count matched))]
      [:ul.keymapper-list (map (partial keymap-item this) matched)]]))])

(defui keymap-list [this keys]
  [:ul.keymapper-list (map (partial keymap-item this) keys)])

(defui keymap-panel [this]
  [:div {:id "keymapper"}
   [:h1 "Keymaps" ]
   [:div {:id "facets"}
    "loading..."]])

(object/object* ::keymapper
                :tags [:keymapper]
                :name "keymapper"
                :init (fn [this]
                        (keymap-panel this)))

(behavior ::update!
          :triggers #{:update!}
          :debounce 200
          :reaction (fn [this keys]
                      (dom/replace-with (dom/$ :div#facets (object/->content this))
                                        (keymap-facets this keys))))

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

(behavior ::set-facets!
          :triggers #{:object.instant}
          :desc "set facets to the provided"
          :type :user
          :exclusive [:lt.plugins.keymapper/set-facets!]
          :reaction (fn [_ f]
                      (reset! facets f)))

(def keymapper (object/create ::keymapper))

(cmd/command {:command :keymapper.show
              :desc "Keymapper: Show Keymap"
              :exec (fn []
                      (object/raise keymapper ::watch)
                      (tabs/add-or-focus! keymapper))})
