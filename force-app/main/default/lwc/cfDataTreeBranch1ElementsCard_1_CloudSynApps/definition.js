let definition =
      {"states":[{"fields":[],"conditions":{"id":"state-condition-object","isParent":true,"group":[]},"definedActions":{"actions":[]},"name":"Active","isSmartAction":false,"smartAction":{},"styleObject":{"padding":[{"type":"around","size":"x-small"}],"margin":[{"type":"around","size":"none"}],"container":{"class":"slds-card"},"size":{"isResponsive":false,"default":"12"},"sizeClass":"slds-size_12-of-12","class":"slds-card slds-p-around_x-small slds-m-bottom_x-small"},"components":{"layer-0":{"children":[{"name":"Block","element":"block","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[{"type":"around","size":"x-small"}],"class":"slds-p-around_x-small","sizeClass":"slds-size_12-of-12"},"children":[{"key":"element_element_block_0_0_flexIcon_0_0","name":"Icon","element":"flexIcon","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","card":"{card}","iconType":"Salesforce SVG","iconName":"standard:avatar","size":"medium","extraclass":"slds-icon_container slds-icon-standard-avatar ","variant":"inverse","imgsrc":""},"type":"element","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"center","color":""},"inlineStyle":"","class":"slds-text-align_center ","style":"      \n         "},"parentElementKey":"element_block_0_0","elementLabel":"Block-0-Icon-0","styleObjects":[{"key":0,"conditions":"default","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"center","color":""},"inlineStyle":"","class":"slds-text-align_center ","style":"      \n         "},"label":"Default","name":"Default","conditionString":"","draggable":false}]},{"key":"element_element_block_0_0_outputField_1_0","name":"Text","element":"outputField","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%3E%7BContact.Name%7D%3C/div%3E%0A%3Cdiv%3E%7BRoles%7D%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"center","color":""},"inlineStyle":"","class":"slds-text-align_center ","style":"      \n         "},"parentElementKey":"element_block_0_0","elementLabel":"Block-0-Text-1","styleObjects":[{"key":0,"conditions":"default","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"center","color":""},"inlineStyle":"","class":"slds-text-align_center ","style":"      \n         "},"label":"Default","name":"Default","conditionString":"","draggable":false}]}],"elementLabel":"Block-0"}]}},"childCards":[],"actions":[],"omniscripts":[],"documents":[]}],"dataSource":{"type":"Query","value":{"dsDelay":"","query":"SELECT Contact.Name, Roles FROM AccountContactRelation WHERE AccountId IN\n(SELECT Household_Account__pc FROM Account WHERE Id = '{recordId}')\n","jsonMap":"{\"recordId\":\"{recordId}\"}","resultVar":""},"orderBy":{"name":"","isReverse":""},"contextVariables":[]},"title":"DataTreeBranch1ElementsCard","enableLwc":true,"isFlex":true,"theme":"slds","selectableMode":"Multi","lwc":{"DeveloperName":"cfDataTreeBranch1ElementsCard_1_CloudSynApps","Id":"0RbDz00000014P5KAI","MasterLabel":"cfDataTreeBranch1ElementsCard_1_CloudSynApps","NamespacePrefix":"c","ManageableState":"unmanaged"},"uniqueKey":"DataTreeBranch1ElementsCard_1_CloudSynApps","Name":"DataTreeBranch1ElementsCard","Id":"0koDz000000000pIAA","OmniUiCardKey":"DataTreeBranch1ElementsCard/CloudSynApps/1.0","OmniUiCardType":"Child"};
  export default definition