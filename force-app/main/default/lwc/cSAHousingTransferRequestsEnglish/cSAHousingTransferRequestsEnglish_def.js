export const OMNIDEF = {"userTimeZone":-300,"userProfile":"System Administrator","userName":"shivam.pandey@@csahousing.casemgtdev","userId":"005Dz000009roqoIAA","userCurrencyCode":"CAD","timeStamp":"2023-11-10T12:14:28.597Z","sOmniScriptId":"0jNDz0000004CDAMA2","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"currentLanguage":"en_US","scrollBehavior":"auto","stepChartPlacement":"right","mergeSavedData":false,"stylesheet":{"lightningRtl":"","newportRtl":"","lightning":"","newport":""},"disableUnloadWarn":true,"errorMessage":{"custom":[]},"consoleTabIcon":"custom:custom18","consoleTabTitle":null,"rtpSeed":false,"showInputWidth":false,"currencyCode":"","autoFocus":false,"pubsub":false,"message":{},"ssm":false,"wpm":false,"consoleTabLabel":"New","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","cancelSource":"%ContextId%","allowCancel":true,"cancelType":"SObject","visualforcePagesAvailableInPreview":{},"hideStepChart":false,"timeTracking":false,"knowledgeArticleTypeQueryFieldsMap":{},"lkObjName":null,"bLK":false,"enableKnowledge":false,"trackingCustomData":{},"seedDataJSON":{},"elementTypeToHTMLTemplateMapping":{},"autoSaveOnStepNext":false,"saveURLPatterns":{},"saveObjectId":"%ContextId%","saveContentEncoded":false,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveNameTemplate":null,"allowSaveForLater":true,"persistentComponent":[{"modalConfigurationSetting":{"modalSize":"lg","modalController":"ModalProductCtrl","modalHTMLTemplateId":"vlcProductConfig.html"},"itemsKey":"cartItems","id":"vlcCart","responseJSONNode":"","responseJSONPath":"","sendJSONNode":"","sendJSONPath":"","postTransformBundle":"","preTransformBundle":"","remoteOptions":{"postTransformBundle":"","preTransformBundle":""},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","label":"","render":false},{"modalConfigurationSetting":{"modalSize":"lg","modalController":"","modalHTMLTemplateId":""},"itemsKey":"knowledgeItems","id":"vlcKnowledge","postTransformBundle":"","preTransformBundle":"","remoteOptions":{"postTransformBundle":"","preTransformBundle":""},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","label":"","dispOutsideOmni":false,"render":false}]},"prefillJSON":"{}","lwcId":"791c46da-016d-da72-a1dc-e611cac5a655","labelMap":{"AdditionalInformation":"TransferRequest:RequestedDetails:AdditionalInformation","Parking":"TransferRequest:RequestedDetails:Parking","AccessibilityFeatures":"TransferRequest:RequestedDetails:AccessibilityFeatures","ReasonForTransfer":"TransferRequest:RequestedDetails:ReasonForTransfer","StartDate":"TransferRequest:Placement:StartDate","UnitName":"TransferRequest:Placement:UnitName","PEName":"TransferRequest:Placement:PEName","TextBlock5":"Confirmation:TextBlock5","TextBlock4":"Confirmation:TextBlock4","RequestedDetails":"TransferRequest:RequestedDetails","Placement":"TransferRequest:Placement","Confirmation":"Confirmation","DataRaptorExtractAction2":"DataRaptorExtractAction2","DataRaptorPostAction1":"DataRaptorPostAction1","TransferRequest":"TransferRequest","SetValues1":"SetValues1","DataRaptorExtractAction1":"DataRaptorExtractAction1"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"DataRaptor Extract Action","propSetMap":{"disOnTplt":false,"ignoreCache":false,"enableActionMessage":false,"enableDefaultAbort":false,"errorMessage":{"default":null,"custom":[]},"label":"DataRaptorExtractAction1","pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[false,false],"redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","redirectTemplateUrl":"vlcAcknowledge.html","redirectPageName":"","validationRequired":"Step","failureAbortMessage":"Are you sure?","failureGoBackLabel":"Go Back","failureAbortLabel":"Abort","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","responseJSONNode":"","responseJSONPath":"","remoteTimeout":30000,"dataRaptor Input Parameters":[{"element":"userId","inputParam":"userId"}],"bundle":"CSAExtractMemberDetails","controlWidth":12,"aggElements":{}},"offSet":0,"name":"DataRaptorExtractAction1","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"DataRaptorExtractAction1","lwcId":"lwc0"},{"type":"Set Values","propSetMap":{"pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[true,false],"elementValueMap":{"StartDate":"%StartDate%","PEName":"=%ProgramName%","UnitName":"%UnitName%"},"label":"SetValues1","controlWidth":12,"aggElements":{}},"offSet":0,"name":"SetValues1","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SetValues1","lwcId":"lwc1"},{"type":"Step","propSetMap":{"businessEvent":"","businessCategory":"","message":{},"pubsub":false,"ssm":false,"wpm":false,"errorMessage":{"default":null,"custom":[]},"allowSaveForLater":true,"label":"Unit Transfer Request","chartLabel":null,"instructionKey":"","HTMLTemplateId":"","conditionType":"Hide if False","show":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"dataCategoryCriteria":"","keyword":"","publishStatus":"Online","language":"English"},"remoteOptions":{},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","showPersistentComponent":[true,false],"instruction":"","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","saveMessage":"Are you sure you want to save it for later?","saveLabel":"","cancelMessage":"Are you sure?","cancelLabel":"Cancel","nextWidth":3,"nextLabel":"Submit","previousWidth":3,"previousLabel":"Previous","validationRequired":true,"uiElements":{"TransferRequest":"","PEName":"","UnitName":"","StartDate":"","Placement":"","ReasonForTransfer":"","AccessibilityFeatures":"","Parking":"","AdditionalInformation":"","RequestedDetails":""},"aggElements":{}},"offSet":0,"name":"TransferRequest","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Block","rootIndex":2,"response":null,"propSetMap":{"bus":true,"disOnTplt":false,"label":null,"hide":false,"HTMLTemplateId":"","accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"repeatLimit":null,"repeatClone":false,"repeat":false,"collapse":false,"controlWidth":12},"name":"Placement","level":1,"JSONPath":"TransferRequest:Placement","indexInParent":0,"index":0,"children":[{"response":null,"level":2,"indexInParent":0,"eleArray":[{"type":"Text","rootIndex":2,"response":null,"propSetMap":{"label":"Program Enrollment Name","disOnTplt":false,"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"maxLength":255,"minLength":0,"ptrnErrText":"","pattern":"","mask":"","helpText":"","help":false,"defaultValue":"%ProgramName%","readOnly":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":false,"inputWidth":12,"showInputWidth":false,"controlWidth":12},"name":"PEName","level":2,"JSONPath":"TransferRequest:Placement|1:PEName","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc2000-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":1,"eleArray":[{"type":"Text","rootIndex":2,"response":null,"propSetMap":{"label":"Current Unit","disOnTplt":false,"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"maxLength":255,"minLength":0,"ptrnErrText":"","pattern":"","mask":"","helpText":"","help":false,"defaultValue":"%UnitName%","readOnly":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":false,"inputWidth":12,"showInputWidth":false,"controlWidth":12},"name":"UnitName","level":2,"JSONPath":"TransferRequest:Placement|1:UnitName","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc2001-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":2,"eleArray":[{"type":"Date","rootIndex":2,"response":null,"propSetMap":{"label":"Residency Start Date","maxDate":"","minDate":"","disOnTplt":false,"hide":false,"HTMLTemplateId":"","accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"dateFormat":"MM-dd-yyyy","modelDateFormat":"yyyy-MM-dd","dateType":"string","helpText":"","help":false,"defaultValue":"%StartDate%","readOnly":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":false,"inputWidth":12,"showInputWidth":false,"controlWidth":12},"name":"StartDate","level":2,"JSONPath":"TransferRequest:Placement|1:StartDate","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bDate":true,"lwcId":"lwc2002-0"}],"bHasAttachment":false}],"bHasAttachment":false,"bBlock":true,"lwcId":"lwc20-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Block","rootIndex":2,"response":null,"propSetMap":{"bus":true,"disOnTplt":false,"label":null,"hide":false,"HTMLTemplateId":"","accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"repeatLimit":null,"repeatClone":false,"repeat":false,"collapse":false,"controlWidth":12},"name":"RequestedDetails","level":1,"JSONPath":"TransferRequest:RequestedDetails","indexInParent":1,"index":0,"children":[{"response":null,"level":2,"indexInParent":0,"eleArray":[{"type":"Select","rootIndex":2,"response":null,"propSetMap":{"label":"Reason for change","disOnTplt":false,"hide":false,"HTMLTemplateId":"","accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"controllingField":{"source":"","type":"","element":""},"optionSource":{"source":"","type":""},"options":[{"value":"Change in household makeup","name":"Change in household makeup"},{"value":"Safety","name":"Safety"},{"value":"Medical Accommodation","name":"Medical Accommodation"}],"helpText":"","help":false,"defaultValue":null,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":true,"inputWidth":12,"showInputWidth":false,"controlWidth":12},"name":"ReasonForTransfer","level":2,"JSONPath":"TransferRequest:RequestedDetails|1:ReasonForTransfer","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bSelect":true,"lwcId":"lwc2100-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":1,"eleArray":[{"type":"Multi-select","rootIndex":2,"response":null,"propSetMap":{"label":"Accessibility Features","disOnTplt":false,"enableCaption":true,"imageCountInRow":3,"optionHeight":100,"optionWidth":100,"hide":false,"HTMLTemplateId":"","accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"controllingField":{"source":"","type":"","element":""},"optionSource":{"source":"omnistudio__InventoryItem__c.omnistudio__AccessibilityFeatures__c","type":"SObject"},"options":[],"helpText":"","help":false,"defaultValue":null,"horizontalMode":false,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":false,"controlWidth":12},"name":"AccessibilityFeatures","level":2,"JSONPath":"TransferRequest:RequestedDetails|1:AccessibilityFeatures","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bMultiselect":true,"lwcId":"lwc2101-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":2,"eleArray":[{"type":"Radio","rootIndex":2,"response":null,"propSetMap":{"label":"Parking Required","disOnTplt":false,"enableCaption":true,"imageCountInRow":3,"optionHeight":100,"optionWidth":100,"hide":false,"HTMLTemplateId":"","accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"controllingField":{"source":"","type":"","element":""},"optionSource":{"source":"","type":""},"options":[{"value":"Yes","name":"Yes"},{"value":"No","name":"No"}],"helpText":"","help":false,"defaultValue":null,"horizontalMode":false,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":false,"controlWidth":12},"name":"Parking","level":2,"JSONPath":"TransferRequest:RequestedDetails|1:Parking","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bRadio":true,"lwcId":"lwc2102-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":3,"eleArray":[{"type":"Text Area","rootIndex":2,"response":null,"propSetMap":{"label":"Additional Information","disOnTplt":false,"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"maxLength":255,"minLength":0,"ptrnErrText":"","pattern":"","helpText":"","help":false,"defaultValue":null,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":false,"inputWidth":12,"showInputWidth":false,"controlWidth":12},"name":"AdditionalInformation","level":2,"JSONPath":"TransferRequest:RequestedDetails|1:AdditionalInformation","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bTextarea":true,"lwcId":"lwc2103-0"}],"bHasAttachment":false}],"bHasAttachment":false,"bBlock":true,"lwcId":"lwc21-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"TransferRequest","lwcId":"lwc2"},{"type":"DataRaptor Post Action","propSetMap":{"disOnTplt":false,"enableActionMessage":false,"enableDefaultAbort":false,"errorMessage":{"default":null,"custom":[]},"label":"DataRaptorPostAction1","pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[false,false],"redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","redirectTemplateUrl":"vlcAcknowledge.html","redirectPageName":"","validationRequired":"Submit","failureAbortMessage":"Are you sure?","failureGoBackLabel":"Go Back","failureAbortLabel":"Abort","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","sendJSONNode":"","sendJSONPath":"","postTransformBundle":"","remoteTimeout":30000,"bundle":"CSAPostTransferServiceRequest","controlWidth":12,"aggElements":{}},"offSet":0,"name":"DataRaptorPostAction1","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bDataRaptorPostAction":true,"JSONPath":"DataRaptorPostAction1","lwcId":"lwc3"},{"type":"DataRaptor Extract Action","propSetMap":{"disOnTplt":false,"ignoreCache":false,"enableActionMessage":false,"enableDefaultAbort":false,"errorMessage":{"default":null,"custom":[]},"label":"DataRaptorExtractAction2","pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[null,null],"redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","redirectTemplateUrl":"vlcAcknowledge.html","redirectPageName":"","validationRequired":"Step","failureAbortMessage":"Are you sure?","failureGoBackLabel":"Go Back","failureAbortLabel":"Abort","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","responseJSONNode":"","responseJSONPath":"","remoteTimeout":30000,"dataRaptor Input Parameters":[{"element":"DRId_Case","inputParam":"CaseId"}],"bundle":"CSAExtractCaseDetails","controlWidth":12,"aggElements":{}},"offSet":0,"name":"DataRaptorExtractAction2","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"DataRaptorExtractAction2","lwcId":"lwc4"},{"type":"Step","propSetMap":{"disOnTplt":false,"message":{},"pubsub":false,"ssm":false,"wpm":false,"errorMessage":{"default":null,"custom":[]},"allowSaveForLater":true,"label":"Confirmation","chartLabel":null,"instructionKey":"","HTMLTemplateId":"","conditionType":"Hide if False","show":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"dataCategoryCriteria":"","keyword":"","publishStatus":"Online","language":"English"},"remoteOptions":{},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","showPersistentComponent":[null,null],"instruction":"","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","cancelMessage":"Are you sure?","cancelLabel":"Cancel","nextWidth":3,"nextLabel":"Next","previousWidth":3,"previousLabel":"Previous","validationRequired":true,"uiElements":{"Confirmation":""},"aggElements":{}},"offSet":0,"name":"Confirmation","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Text Block","rootIndex":5,"response":null,"propSetMap":{"disOnTplt":false,"sanitize":false,"label":"TextBlock4","textKey":"","HTMLTemplateId":"","dataJSON":false,"show":{"group":{"rules":[{"data":null,"field":"DRId_Case","condition":"<>"}],"operator":"AND"}},"text":"<h2><span style=\"background-color: #3366ff; color: #ffffff;\">Your transfer request is submitted successfully. Please note your service request number# %caseNumber%</span></h2>","controlWidth":12},"name":"TextBlock4","level":1,"JSONPath":"Confirmation:TextBlock4","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc50-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Text Block","rootIndex":5,"response":null,"propSetMap":{"disOnTplt":false,"sanitize":false,"label":"TextBlock4","textKey":"","HTMLTemplateId":"","dataJSON":false,"show":{"group":{"rules":[{"data":null,"field":"DRId_Case","condition":"="}],"operator":"AND"}},"text":"<h2><span style=\"background-color: #3366ff; color: #ffffff;\">An error occurred while submitted your request. Please try again.</span></h2>","controlWidth":12},"name":"TextBlock5","level":1,"JSONPath":"Confirmation:TextBlock5","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc51-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"Confirmation","lwcId":"lwc5"}],"bReusable":false,"bpVersion":1,"bpType":"CSA","bpSubType":"HousingTransferRequests","bpLang":"English","bHasAttachment":false,"lwcVarMap":{}};