gdjs.MenuCode = {};
gdjs.MenuCode.GDPlay_9595ButtonObjects1= [];
gdjs.MenuCode.GDPlay_9595ButtonObjects2= [];
gdjs.MenuCode.GDPlay_9595ButtonObjects3= [];
gdjs.MenuCode.GDExampleWaterMarkObjects1= [];
gdjs.MenuCode.GDExampleWaterMarkObjects2= [];
gdjs.MenuCode.GDExampleWaterMarkObjects3= [];
gdjs.MenuCode.GDBreakOutPhysicsExplainObjects1= [];
gdjs.MenuCode.GDBreakOutPhysicsExplainObjects2= [];
gdjs.MenuCode.GDBreakOutPhysicsExplainObjects3= [];
gdjs.MenuCode.GDBreakOutExplainObjects1= [];
gdjs.MenuCode.GDBreakOutExplainObjects2= [];
gdjs.MenuCode.GDBreakOutExplainObjects3= [];
gdjs.MenuCode.GDMadBreakObjects1= [];
gdjs.MenuCode.GDMadBreakObjects2= [];
gdjs.MenuCode.GDMadBreakObjects3= [];
gdjs.MenuCode.GDGDevelop_9595WaterMarkObjects1= [];
gdjs.MenuCode.GDGDevelop_9595WaterMarkObjects2= [];
gdjs.MenuCode.GDGDevelop_9595WaterMarkObjects3= [];
gdjs.MenuCode.GDGUIBackGroundObjects1= [];
gdjs.MenuCode.GDGUIBackGroundObjects2= [];
gdjs.MenuCode.GDGUIBackGroundObjects3= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDGUIBackGroundObjects1Objects = Hashtable.newFrom({"GUIBackGround": gdjs.MenuCode.GDGUIBackGroundObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11481540);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDPlay_9595ButtonObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDPlay_9595ButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDPlay_9595ButtonObjects2[i].setAnimation(2);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Assets/select_003.ogg", false, 70, 100);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11552036);
}
}
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game(Physics)", false);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Assets/select_003.ogg", false, 70, 100);
}}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDGUIBackGroundObjects1, gdjs.MenuCode.GDGUIBackGroundObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDGUIBackGroundObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDGUIBackGroundObjects2[i].getVariableString(gdjs.MenuCode.GDGUIBackGroundObjects2[i].getVariables().get("ButtonType")) == "Play_Button" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDGUIBackGroundObjects2[k] = gdjs.MenuCode.GDGUIBackGroundObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDGUIBackGroundObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Play_Button"), gdjs.MenuCode.GDPlay_9595ButtonObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDPlay_9595ButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDPlay_9595ButtonObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.MenuCode.GDGUIBackGroundObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDGUIBackGroundObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDGUIBackGroundObjects1[i].getVariableString(gdjs.MenuCode.GDGUIBackGroundObjects1[i].getVariables().get("ButtonType")) == "Physics_Play_Button" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDGUIBackGroundObjects1[k] = gdjs.MenuCode.GDGUIBackGroundObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDGUIBackGroundObjects1.length = k;
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDGUIBackGroundObjects1Objects = Hashtable.newFrom({"GUIBackGround": gdjs.MenuCode.GDGUIBackGroundObjects1});
gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDGUIBackGroundObjects1, gdjs.MenuCode.GDGUIBackGroundObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDGUIBackGroundObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDGUIBackGroundObjects2[i].getVariableString(gdjs.MenuCode.GDGUIBackGroundObjects2[i].getVariables().get("ButtonType")) == "Play_Button" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDGUIBackGroundObjects2[k] = gdjs.MenuCode.GDGUIBackGroundObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDGUIBackGroundObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Play_Button"), gdjs.MenuCode.GDPlay_9595ButtonObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDPlay_9595ButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDPlay_9595ButtonObjects2[i].setAnimation(0);
}
}}

}


{

/* Reuse gdjs.MenuCode.GDGUIBackGroundObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDGUIBackGroundObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDGUIBackGroundObjects1[i].getVariableString(gdjs.MenuCode.GDGUIBackGroundObjects1[i].getVariables().get("ButtonType")) == "Physics_Play_Button" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDGUIBackGroundObjects1[k] = gdjs.MenuCode.GDGUIBackGroundObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDGUIBackGroundObjects1.length = k;
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


};gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BreakOutExplain"), gdjs.MenuCode.GDBreakOutExplainObjects1);
gdjs.copyArray(runtimeScene.getObjects("BreakOutPhysicsExplain"), gdjs.MenuCode.GDBreakOutPhysicsExplainObjects1);
gdjs.copyArray(runtimeScene.getObjects("ExampleWaterMark"), gdjs.MenuCode.GDExampleWaterMarkObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDExampleWaterMarkObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDExampleWaterMarkObjects1[i].setShadow("18;26;44", 7, 0, -(100));
}
}{for(var i = 0, len = gdjs.MenuCode.GDBreakOutPhysicsExplainObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBreakOutPhysicsExplainObjects1[i].setShadow("18;26;44", 7, 0, -(100));
}
}{for(var i = 0, len = gdjs.MenuCode.GDBreakOutExplainObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBreakOutExplainObjects1[i].setShadow("18;26;44", 7, 0, -(100));
}
}{for(var i = 0, len = gdjs.MenuCode.GDExampleWaterMarkObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDExampleWaterMarkObjects1[i].setItalic(true);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "2018-08-02-17971.mp3", 3, false, 25, 1);
}}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("GUIBackGround"), gdjs.MenuCode.GDGUIBackGroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDGUIBackGroundObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GUIBackGround"), gdjs.MenuCode.GDGUIBackGroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDGUIBackGroundObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDPlay_9595ButtonObjects1.length = 0;
gdjs.MenuCode.GDPlay_9595ButtonObjects2.length = 0;
gdjs.MenuCode.GDPlay_9595ButtonObjects3.length = 0;
gdjs.MenuCode.GDExampleWaterMarkObjects1.length = 0;
gdjs.MenuCode.GDExampleWaterMarkObjects2.length = 0;
gdjs.MenuCode.GDExampleWaterMarkObjects3.length = 0;
gdjs.MenuCode.GDBreakOutPhysicsExplainObjects1.length = 0;
gdjs.MenuCode.GDBreakOutPhysicsExplainObjects2.length = 0;
gdjs.MenuCode.GDBreakOutPhysicsExplainObjects3.length = 0;
gdjs.MenuCode.GDBreakOutExplainObjects1.length = 0;
gdjs.MenuCode.GDBreakOutExplainObjects2.length = 0;
gdjs.MenuCode.GDBreakOutExplainObjects3.length = 0;
gdjs.MenuCode.GDMadBreakObjects1.length = 0;
gdjs.MenuCode.GDMadBreakObjects2.length = 0;
gdjs.MenuCode.GDMadBreakObjects3.length = 0;
gdjs.MenuCode.GDGDevelop_9595WaterMarkObjects1.length = 0;
gdjs.MenuCode.GDGDevelop_9595WaterMarkObjects2.length = 0;
gdjs.MenuCode.GDGDevelop_9595WaterMarkObjects3.length = 0;
gdjs.MenuCode.GDGUIBackGroundObjects1.length = 0;
gdjs.MenuCode.GDGUIBackGroundObjects2.length = 0;
gdjs.MenuCode.GDGUIBackGroundObjects3.length = 0;

gdjs.MenuCode.eventsList4(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
