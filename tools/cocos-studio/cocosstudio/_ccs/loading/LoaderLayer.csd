<GameFile>
  <PropertyGroup Name="LoaderLayer" Type="Layer" ID="ab0b44b2-f815-4ec2-afd0-34307db4ebd2" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000" />
      <ObjectData Name="Layer" UserData="MainLayer" Tag="3" ctype="GameLayerObjectData">
        <Size X="640.0000" Y="1136.0000" />
        <Children>
          <AbstractNodeData Name="_layoutBgr" ActionTag="-695492301" UserData="FullScreenBackground" Tag="13613" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="640.0000" Y="1136.0000" />
            <Children>
              <AbstractNodeData Name="_imgBgr" ActionTag="1227603875" Tag="89" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftEage="211" RightEage="211" TopEage="376" BottomEage="376" Scale9OriginX="211" Scale9OriginY="376" Scale9Width="218" Scale9Height="388" ctype="ImageViewObjectData">
                <Size X="640.0000" Y="1136.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="568.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.0000" Y="1.0000" />
                <FileData Type="Normal" Path="sprites/backgrounds/Loading.png" Plist="" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="320.0000" Y="568.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5000" />
            <PreSize X="1.0000" Y="1.0000" />
            <SingleColor A="255" R="150" G="200" B="255" />
            <FirstColor A="255" R="150" G="200" B="255" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
          </AbstractNodeData>
          <AbstractNodeData Name="_txtHint" ActionTag="445827464" UserData="KeepString" Tag="7" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="20.8990" RightMargin="20.8989" TopMargin="1038.7249" BottomMargin="21.3863" IsCustomSize="True" FontSize="32" LabelText="LOADING..." HorizontalAlignmentType="HT_Center" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
            <Size X="598.2020" Y="75.8888" />
            <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
            <Position X="320.0000" Y="97.2752" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.0856" />
            <PreSize X="0.9347" Y="0.0668" />
            <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
            <OutlineColor A="255" R="96" G="96" B="96" />
            <ShadowColor A="255" R="110" G="110" B="110" />
          </AbstractNodeData>
          <AbstractNodeData Name="_layoutBar" ActionTag="1028175999" Tag="5" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" LeftMargin="6.4960" RightMargin="6.4960" TopMargin="1001.0328" BottomMargin="99.9671" TouchEnable="True" ClipAble="False" ColorAngle="90.0000" LeftEage="199" RightEage="199" TopEage="8" BottomEage="8" Scale9OriginX="-199" Scale9OriginY="-8" Scale9Width="398" Scale9Height="16" ctype="PanelObjectData">
            <Size X="627.0080" Y="35.0000" />
            <Children>
              <AbstractNodeData Name="_loadingBarBackground" ActionTag="-330941764" Tag="145" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="11.0040" RightMargin="11.0040" TopMargin="4.1500" BottomMargin="-2.1500" Scale9Enable="True" LeftEage="199" RightEage="199" TopEage="8" BottomEage="15" Scale9OriginX="199" Scale9OriginY="8" Scale9Width="207" Scale9Height="3" ctype="ImageViewObjectData">
                <Size X="605.0000" Y="33.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="313.5040" Y="14.3500" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.4100" />
                <PreSize X="0.9649" Y="0.9429" />
                <FileData Type="Normal" Path="sprites/basics/LoadingBar_01.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="_loadingBar" ActionTag="-1971035400" Tag="4" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="11.0040" RightMargin="11.0040" TopMargin="4.5000" BottomMargin="4.5000" ProgressInfo="50" ctype="LoadingBarObjectData">
                <Size X="605.0000" Y="26.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="313.5040" Y="17.5000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="0.9649" Y="0.7429" />
                <ImageFileData Type="Normal" Path="sprites/basics/LoadingBar_02.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="_txtPercent" ActionTag="-417863439" UserData="KeepString" Tag="6" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="287.5040" RightMargin="287.5040" TopMargin="2.0000" BottomMargin="2.0000" FontSize="25" LabelText="30%" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="52.0000" Y="31.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="313.5040" Y="17.5000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="0.0829" Y="0.8857" />
                <FontResource Type="Normal" Path="fonts/LilitaOneRegular.ttf" Plist="" />
                <OutlineColor A="255" R="58" G="0" B="27" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="_nodeLoadingHead" ActionTag="-404633673" Tag="96" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="313.5040" RightMargin="313.5040" TopMargin="17.5000" BottomMargin="17.5000" ctype="SingleNodeObjectData">
                <Size X="0.0000" Y="0.0000" />
                <AnchorPoint />
                <Position X="313.5040" Y="17.5000" />
                <Scale ScaleX="0.3500" ScaleY="0.3500" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="0.0000" Y="0.0000" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="320.0000" Y="117.4671" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.1034" />
            <PreSize X="0.9797" Y="0.0308" />
            <SingleColor A="255" R="30" G="144" B="255" />
            <FirstColor A="255" R="150" G="200" B="255" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>