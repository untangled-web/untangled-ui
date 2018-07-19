(ns untangled.ui.dialogs
  "A collection of pre-written common dialogs"
  (:require [om.next :as om :refer [defui]]
            [om.dom :as dom]
            [untangled.i18n :refer [tr tr-unsafe]]
            [untangled.ui.elements :as e]
            [untangled.client.mutations :as m]))

(defn dialog-ident [props] [:dialogs/by-id (:dialog/id props)])

(def default-yes-label (do (tr "Yes") "Yes"))
(def default-no-label (do (tr "No") "No"))

(defn make-confirmation-dialog
  "If using i18n, be sure to pass these labels through `tr`. This is a bit
  counterintuitive, but to get it right, use a pattern like this:

  ```
  (def do-it-string (do (tr \"Do it???\") \"Do it???\"))
  (make-confirmation-dialog
     :title do-it-string ...)
  ```

  "
  [id modal? message & {:keys [title yes-label no-label]
                        :or   {yes-label "Yes"
                               no-label  "No"}}]
  {:dialog/id    id
   :dialog/visible? false
   :dialog/modal? modal?
   :dialog/title title
   :dialog/message message
   :dialog/yes-label yes-label
   :dialog/no-label no-label})

(defui ConfirmationDialog
  static om/Ident
  (ident [this props] (dialog-ident props))
  static om/IQuery
  (query [this] [:visible :modal])
  Object
  (render [this]
          (let [{:keys [title message no-label yes-label onDone]} (om/get-computed this)
                respond (fn [v]
                          (m/set-value! this :dialog/visible? false)
                          (when onDone (onDone v)))
                {:keys [dialog/visible? dialog/modal?]} (om/props this)]
            (e/ui-dialog {}
                         (when title (e/ui-dialog-title (tr-unsafe title)))
                         (when message (e/ui-dialog-body (tr-unsafe message)))
                         (e/ui-dialog-actions {}
                                              (dom/div nil
                                                       (e/ui-button #js {:onClick #(respond false)} (tr-unsafe no-label))
                                                       (e/ui-button #js {:onClick #(respond true)} (tr-unsafe yes-label))))))))

(let [factory (om/factory ConfirmationDialog {:keyfn :dialog/id})]
  (defn ui-confirmation-dialog
    "Render a confirmation dialog. The various labels are supplied to this
    function so you can internationalize them.

    Note: Initialize dialogs in your app state with `make-confirmation-dialog`,
    which is also where you decide if it is a modal dialog.

    Parameters:

    `props` The Om props for the component
    `onDone` Function to be called (with true/false) when the user chooses.

    The dialog automatically closes when a choice is made.
    "
    [props & {:keys [onDone]}]
    (factory (om/computed props {:onDone onDone}))))


