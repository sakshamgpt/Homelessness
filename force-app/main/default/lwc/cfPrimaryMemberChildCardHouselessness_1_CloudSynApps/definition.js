let definition =
      {"states":[{"fields":[],"conditions":{"id":"state-condition-object","isParent":true,"group":[]},"definedActions":{"actions":[]},"name":"Active","isSmartAction":false,"smartAction":{},"styleObject":{"padding":[{"type":"around","size":"x-small"}],"margin":[{"type":"bottom","size":"x-small"}],"container":{"class":"slds-card"},"size":{"isResponsive":false,"default":"12"},"sizeClass":"slds-size_12-of-12","class":"slds-card slds-p-around_x-small slds-m-bottom_x-small"},"components":{"layer-0":{"children":[{"name":"Block","element":"block","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[{"type":"around","size":"x-small"}],"class":"slds-p-around_x-small","sizeClass":"slds-size_12-of-12 ","size":{"isResponsive":false,"default":"12"}},"children":[{"name":"Block","element":"block","size":{"isResponsive":false,"default":"4"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[{"type":"around","size":"x-small"}],"class":"slds-p-around_x-small","sizeClass":"slds-size_4-of-12 ","size":{"isResponsive":false,"default":"4"}},"children":[],"elementLabel":"Block-2","key":"element_element_block_0_0_block_0_0","parentElementKey":"element_block_0_0"},{"name":"Block","element":"block","size":{"isResponsive":false,"default":"4"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[{"type":"around","size":"x-small","label":"around:x-small"}],"class":"slds-text-align_center slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-around_x-small ","sizeClass":"slds-size_4-of-12 ","margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"4"},"container":{"class":""},"border":{"type":["border_top","border_right","border_bottom","border_left"],"width":"","color":"#000000","radius":"5px","style":"dashed"},"elementStyleProperties":{},"text":{"align":"center","color":"#000000"},"inlineStyle":"","style":"     border-top: #000000 1px dashed;border-right: #000000 1px dashed;border-bottom: #000000 1px dashed;border-left: #000000 1px dashed; \n    border-radius:5px;    color:#000000; "},"children":[{"name":"Icon","element":"flexIcon","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","card":"{card}","color":"#FFFFFF","iconType":"Salesforce SVG","iconName":"standard:avatar","size":"medium","extraclass":"slds-icon_container slds-icon-standard-avatar ","variant":"default","imgsrc":""},"type":"element","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{"color":"#FFFFFF"},"text":{"align":"center","color":""},"inlineStyle":"","class":"slds-theme_default slds-text-align_center ","style":"      \n         ","theme":"theme_default"},"elementLabel":"MemberIcon","styleObjects":[{"key":0,"conditions":"default","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{"color":"#FFFFFF"},"text":{"align":"center","color":""},"inlineStyle":"","class":"slds-theme_default slds-text-align_center ","style":"      \n         ","theme":"theme_default"},"label":"Default","name":"Default","conditionString":"","draggable":false}],"userUpdatedElementLabel":true,"key":"element_element_element_block_0_0_block_1_0_flexIcon_0_0","parentElementKey":"element_element_block_0_0_block_1_0"},{"name":"Text","element":"outputField","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22font-size:%2014pt;%22%3E%7BHouseholdName%7D%3C/span%3E%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"center","color":""},"inlineStyle":"","theme":"theme_default","class":"slds-theme_default slds-text-align_center ","style":"      \n         "},"elementLabel":"Block-1-Text-1","styleObjects":[{"key":0,"conditions":"default","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"center","color":""},"inlineStyle":"","theme":"theme_default","class":"slds-theme_default slds-text-align_center ","style":"      \n         "},"label":"Default","name":"Default","conditionString":"","draggable":false}],"key":"element_element_element_block_0_0_block_1_0_outputField_1_0","parentElementKey":"element_element_block_0_0_block_1_0"},{"key":"element_element_element_block_0_0_block_1_0_action_3_0","name":"Action","element":"action","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"label":"Add Household","iconName":"utility:add","record":"{record}","card":"{card}","stateObj":"{record}","actionList":[{"stateAction":{"id":"flex-action-1693571899650","type":"Custom","targetType":"Web Page","openUrlIn":"New Tab/Window","Web Page":{"targetName":"https://cloudsynapps31--casemgtdev.sandbox.lightning.force.com/lightning/o/Account/new?count=1&nooverride=1&useRecordTypeCheck=1&navigationLocation=LIST_VIEW&uid=169357173375536607"}},"key":"1693511118095-ivximzlc6","label":"Add Household","draggable":true,"isOpen":true,"actionIndex":0}],"showSpinner":"false","hideActionIcon":false,"iconSize":"x-small","flyoutDetails":{}},"type":"element","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{"iconSize":"x-small"},"text":{"align":"center","color":""},"inlineStyle":"","class":"slds-text-align_center ","style":"      \n         "},"parentElementKey":"element_element_block_0_0_block_1_0","elementLabel":"Block-1-Action-3","styleObjects":[{"key":0,"conditions":"default","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{"iconSize":"x-small"},"text":{"align":"center","color":""},"inlineStyle":"","class":"slds-text-align_center ","style":"      \n         "},"label":"Default","name":"Default","conditionString":"","draggable":false}]}],"elementLabel":"Block-1","styleObjects":[{"key":0,"conditions":"default","styleObject":{"padding":[{"type":"around","size":"x-small","label":"around:x-small"}],"class":"slds-text-align_center slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-around_x-small ","sizeClass":"slds-size_4-of-12 ","margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"4"},"container":{"class":""},"border":{"type":["border_top","border_right","border_bottom","border_left"],"width":"","color":"#000000","radius":"5px","style":"dashed"},"elementStyleProperties":{},"text":{"align":"center","color":"#000000"},"inlineStyle":"","style":"     border-top: #000000 1px dashed;border-right: #000000 1px dashed;border-bottom: #000000 1px dashed;border-left: #000000 1px dashed; \n    border-radius:5px;    color:#000000; "},"label":"Default","name":"Default","conditionString":"","draggable":false}],"key":"element_element_block_0_0_block_1_0","parentElementKey":"element_block_0_0"},{"name":"Block","element":"block","size":{"isResponsive":false,"default":"4"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[{"type":"around","size":"x-small"}],"class":"slds-p-around_x-small","sizeClass":"slds-size_4-of-12 ","size":{"isResponsive":false,"default":"4"}},"children":[],"elementLabel":"Block-0-clone-0","key":"element_element_block_0_0_block_2_0","parentElementKey":"element_block_0_0"}],"elementLabel":"Block-2"}]}},"childCards":[],"actions":[],"omniscripts":[],"documents":[],"blankCardState":false}],"dataSource":{"type":"DataRaptor","value":{"dsDelay":"","bundle":"DR_GetMember","bundleType":"","inputMap":{"AccountId":"{recordId}"},"jsonMap":"{\"recordId\":\"{recordId}\"}","resultVar":""},"orderBy":{"name":"","isReverse":""},"contextVariables":[]},"title":"PrimaryMemberChildCardHouselessness","enableLwc":true,"isFlex":true,"theme":"slds","selectableMode":"Multi","lwc":{"DeveloperName":"cfPrimaryMemberChildCard","Id":"0RbDz0000009NVJKA2","MasterLabel":"cfPrimaryMemberChildCard","NamespacePrefix":"c","ManageableState":"unmanaged"},"Name":"PrimaryMemberChildCardHouselessness","uniqueKey":"PrimaryMemberChildCardHouselessness_1_CloudSynApps","Id":"0koDz0000004CEcIAM","OmniUiCardKey":"PrimaryMemberChildCardHouselessness/CloudSynApps/1.0","OmniUiCardType":"Child"};
  export default definition