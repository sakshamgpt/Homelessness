export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"saksham.gupta@cloudsynapps.com.housingdev","userId":"005a5000001Ac6fAAC","userCurrencyCode":"USD","timeStamp":"2024-04-16T14:17:16.204Z","sOmniScriptId":"0jNa500000068EDEAY","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{},"timeTracking":false,"stylesheet":{"newportRtl":"","newport":"","lightningRtl":"","lightning":""},"stepChartPlacement":"right","ssm":false,"showInputWidth":false,"seedDataJSON":{},"scrollBehavior":"auto","saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":"","itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":"","itemsKey":"knowledgeItems","id":"vlcKnowledge","dispOutsideOmni":false}],"message":{},"mergeSavedData":false,"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":false,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currentLanguage":"en_US","currencyCode":"","consoleTabTitle":null,"consoleTabLabel":"New","consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":true,"allowCancel":true},"prefillJSON":"{}","lwcId":"86b14425-e196-eb9d-a6b8-3fb35f7391c4","labelMap":{"Lookup2":"Step1:Lookup2","Lookup1":"Step1:Lookup1","Step2":"Step2","Step1":"Step1","DataRaptorExtractAction1":"DataRaptorExtractAction1"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"DataRaptor Extract Action","propSetMap":{"wpm":false,"validationRequired":"Step","ssm":false,"showPersistentComponent":[true,false],"show":null,"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postMessage":"Done","message":{},"label":"DataRaptorExtractAction1","inProgressMessage":"In Progress","ignoreCache":false,"failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"dataRaptor Input Parameters":[{"inputParam":"CaseId","element":"ContextId"}],"controlWidth":12,"businessEvent":"","businessCategory":"","bundle":"DRGetCaseParticipantData","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"DataRaptorExtractAction1","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"DataRaptorExtractAction1","lwcId":"lwc0"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":"Previous","nextWidth":3,"nextLabel":"Next","message":{},"label":"Step 1","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","businessEvent":"","businessCategory":"","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"Step1":"","Lookup1":"","Lookup2":""},"aggElements":{}},"offSet":0,"name":"Step1","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Lookup","rootIndex":1,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"placeholder":"","label":"Case Participant","inputWidth":12,"hide":false,"helpTextPos":"","helpText":"","help":false,"errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"defaultValue":null,"dataSource":{"type":"SObject","mapItems":{"phase2MapItems":[{"InterfaceFieldAPIName__c":"CaseParticipants:Id","DomainObjectFieldAPIName__c":"name","DomainObjectCreationOrder__c":1,"DomainObjectAPIName__c":"JSON"},{"InterfaceFieldAPIName__c":"CaseParticipants:Name","DomainObjectFieldAPIName__c":"value","DomainObjectCreationOrder__c":1,"DomainObjectAPIName__c":"JSON"}],"phase1MapItems":[{"InterfaceObjectName__c":"CaseParticipant","InterfaceObjectLookupOrder__c":1,"InterfaceFieldAPIName__c":"CaseId","FilterValue__c":"case","FilterOperator__c":"=","DomainObjectFieldAPIName__c":"CaseParticipants"}],"inputParameters":[{"inputParam":"case","element":"%ContextId%"}]}},"controlWidth":12,"conditionType":"Hide if False","clearValue":true,"accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"Lookup1","level":1,"JSONPath":"Step1:Lookup1","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bLookup":true,"lwcId":"lwc10-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Lookup","rootIndex":1,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"placeholder":"","label":"Matching Unit","inputWidth":12,"hide":false,"helpTextPos":"","helpText":"","help":false,"errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"defaultValue":null,"dataSource":{"type":"SObject","mapItems":{"phase2MapItems":[{"InterfaceFieldAPIName__c":"Unit:Id","DomainObjectFieldAPIName__c":"name","DomainObjectCreationOrder__c":1,"DomainObjectAPIName__c":"JSON"},{"InterfaceFieldAPIName__c":"Unit:Name","DomainObjectFieldAPIName__c":"value","DomainObjectCreationOrder__c":1,"DomainObjectAPIName__c":"JSON"}],"phase1MapItems":[{"InterfaceObjectName__c":"Unit__c","InterfaceObjectLookupOrder__c":1,"InterfaceFieldAPIName__c":"Building__c","FilterValue__c":"Building","FilterOperator__c":"=","DomainObjectFieldAPIName__c":"Unit"}],"inputParameters":[{"inputParam":"Building","element":"BuildingId"}]}},"controlWidth":12,"conditionType":"Hide if False","clearValue":true,"accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"Lookup2","level":1,"JSONPath":"Step1:Lookup2","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bLookup":true,"lwcId":"lwc11-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"Step1","lwcId":"lwc1"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":"Previous","nextWidth":3,"nextLabel":"Next","message":{},"label":"Step2","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","businessEvent":"","businessCategory":"","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"Step2":""},"aggElements":{}},"offSet":0,"name":"Step2","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"Step2","lwcId":"lwc2"}],"bReusable":false,"bpVersion":3,"bpType":"Placement","bpSubType":"Homelessness","bpLang":"English","bHasAttachment":false,"lwcVarMap":{}};