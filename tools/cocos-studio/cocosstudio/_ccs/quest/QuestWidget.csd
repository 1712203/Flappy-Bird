<GameFile>
  <PropertyGroup Name="QuestWidget" Type="Node" ID="5dedb536-3562-4915-a269-3da65f8e2867" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="80" Speed="1.0000" ActivedAnimationName="GiftBoxFinish">
        <Timeline ActionTag="779341053" Property="CColor">
          <ColorFrame FrameIndex="0" Alpha="255">
            <EasingData Type="0" />
            <Color A="255" R="149" G="123" B="105" />
          </ColorFrame>
          <ColorFrame FrameIndex="10" Alpha="255">
            <EasingData Type="0" />
            <Color A="255" R="0" G="161" B="150" />
          </ColorFrame>
        </Timeline>
        <Timeline ActionTag="-1166056689" Property="Position">
          <PointFrame FrameIndex="20" X="479.9999" Y="61.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="40" X="479.9999" Y="61.0000">
            <EasingData Type="11" />
          </PointFrame>
          <PointFrame FrameIndex="65" X="479.9999" Y="75.0000">
            <EasingData Type="5" />
          </PointFrame>
          <PointFrame FrameIndex="80" X="479.9999" Y="61.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-1166056689" Property="Scale">
          <ScaleFrame FrameIndex="20" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="40" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="65" X="0.9000" Y="1.1000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="80" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-1166056689" Property="RotationSkew">
          <ScaleFrame FrameIndex="20" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="30" X="-50.0000" Y="-49.9992">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="40" X="10.0000" Y="10.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="-50.0000" Y="-50.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="75" X="10.0000" Y="10.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="80" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="Normal" StartIndex="0" EndIndex="0">
          <RenderColor A="255" R="244" G="164" B="96" />
        </AnimationInfo>
        <AnimationInfo Name="Finished" StartIndex="10" EndIndex="10">
          <RenderColor A="255" R="255" G="218" B="185" />
        </AnimationInfo>
        <AnimationInfo Name="GiftBoxFinish" StartIndex="20" EndIndex="80">
          <RenderColor A="255" R="175" G="238" B="238" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="266" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_layoutRoot" ActionTag="-1972006294" Tag="525" IconVisible="False" LeftMargin="-240.0000" RightMargin="-240.0000" TopMargin="-61.0000" BottomMargin="-61.0000" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="480.0000" Y="122.0000" />
            <Children>
              <AbstractNodeData Name="_imgBgrDoing" ActionTag="481334904" Tag="1018" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" Scale9Enable="True" LeftEage="18" RightEage="152" TopEage="44" BottomEage="21" Scale9OriginX="18" Scale9OriginY="44" Scale9Width="1" Scale9Height="57" ctype="ImageViewObjectData">
                <Size X="480.0000" Y="122.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="240.0000" Y="61.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="243" G="243" B="70" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.0000" Y="1.0000" />
                <FileData Type="PlistSubImage" Path="basics/other/BoardBlue.png" Plist="sprite-sheets/Basics.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_nodeImgBgrFinished" ActionTag="1638106786" Tag="516" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="240.0000" RightMargin="240.0000" TopMargin="61.0000" BottomMargin="61.0000" ctype="SingleNodeObjectData">
                <Size X="0.0000" Y="0.0000" />
                <AnchorPoint />
                <Position X="240.0000" Y="61.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="0.0000" Y="0.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutIcon" ActionTag="1466145313" Tag="1066" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="11.1140" RightMargin="384.0740" TopMargin="7.2246" BottomMargin="29.9654" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="84.8120" Y="84.8100" />
                <Children>
                  <AbstractNodeData Name="_imgIconBgr" ActionTag="779341053" Tag="1088" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" Scale9Enable="True" LeftEage="26" RightEage="29" TopEage="29" BottomEage="29" Scale9OriginX="26" Scale9OriginY="29" Scale9Width="9" Scale9Height="6" ctype="ImageViewObjectData">
                    <Size X="84.8120" Y="84.8100" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="42.4060" Y="42.4050" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="149" G="123" B="105" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="1.0000" Y="1.0000" />
                    <FileData Type="PlistSubImage" Path="basics/shapes/RoundedRectangle_64px_5px.png" Plist="sprite-sheets/Basics.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_imgIcon" ActionTag="-262559637" Tag="1020" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="4.2406" RightMargin="4.2406" TopMargin="4.2405" BottomMargin="4.2405" LeftEage="42" RightEage="42" TopEage="42" BottomEage="42" Scale9OriginX="42" Scale9OriginY="42" Scale9Width="44" Scale9Height="44" ctype="ImageViewObjectData">
                    <Size X="76.3308" Y="76.3290" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="42.4060" Y="42.4050" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="0.9000" Y="0.9000" />
                    <FileData Type="PlistSubImage" Path="icons/color/quests/Card10D.png" Plist="sprite-sheets/Nocis.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_txtProgress" ActionTag="1645482840" UserData="EmptyString" Tag="1086" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="-1.5940" RightMargin="-1.5940" TopMargin="84.8114" BottomMargin="-26.0014" FontSize="23" LabelText="(50/50)" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="0.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="88.0000" Y="26.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="42.4060" Y="-13.0014" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="143" G="54" B="78" />
                    <PrePosition X="0.5000" Y="-0.1533" />
                    <PreSize X="1.0376" Y="0.3066" />
                    <FontResource Type="Normal" Path="fonts/LilitaOneRegular.ttf" Plist="" />
                    <OutlineColor A="255" R="16" G="77" B="0" />
                    <ShadowColor A="255" R="16" G="77" B="0" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="53.5200" Y="72.3704" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.1115" Y="0.5932" />
                <PreSize X="0.1767" Y="0.6952" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_txtDescription" ActionTag="-2024500751" UserData="EmptyString" Tag="1299" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="105.8880" RightMargin="130.5006" TopMargin="4.3782" BottomMargin="4.3782" IsCustomSize="True" FontSize="25" LabelText="Collect some grass and doing some stupid things" VerticalAlignmentType="VT_Center" ShadowOffsetX="0.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="243.6114" Y="113.2436" />
                <AnchorPoint ScaleY="0.5000" />
                <Position X="105.8880" Y="61.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="87" G="60" B="38" />
                <PrePosition X="0.2206" Y="0.5000" />
                <PreSize X="0.5075" Y="0.9282" />
                <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                <OutlineColor A="255" R="50" G="142" B="26" />
                <ShadowColor A="255" R="199" G="255" B="199" />
              </AbstractNodeData>
              <AbstractNodeData Name="_gridViewRewards" ActionTag="1475293848" Tag="1319" FrameEvent="ck.GridViewHorizontal" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentHeightEnable="True" PercentHeightEnabled="True" LeftMargin="378.9760" RightMargin="1.0240" ClipAble="False" BackColorAlpha="102" ComboBoxIndex="1" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="100.0000" Y="122.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="428.9760" Y="61.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.8937" Y="0.5000" />
                <PreSize X="0.2083" Y="1.0000" />
                <SingleColor A="255" R="0" G="0" B="0" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutClaiming" ActionTag="-77462804" VisibleForFrame="False" Tag="329" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TouchEnable="True" ClipAble="False" BackColorAlpha="127" ComboBoxIndex="1" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="480.0000" Y="122.0000" />
                <AnchorPoint />
                <Position />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="1.0000" Y="1.0000" />
                <SingleColor A="255" R="0" G="0" B="0" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgGiftBox" ActionTag="-1166056689" Tag="1321" IconVisible="False" PositionPercentXEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="463.4879" RightMargin="-16.5119" TopMargin="42.4987" BottomMargin="42.4987" LeftEage="10" RightEage="10" TopEage="12" BottomEage="12" Scale9OriginX="10" Scale9OriginY="12" Scale9Width="13" Scale9Height="13" ctype="ImageViewObjectData">
                <Size X="33.0240" Y="37.0026" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="479.9999" Y="61.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="1.0000" Y="0.5000" />
                <PreSize X="0.0688" Y="0.3033" />
                <FileData Type="PlistSubImage" Path="icons/flat/Reward.png" Plist="sprite-sheets/Nocis.plist" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <SingleColor A="255" R="150" G="200" B="255" />
            <FirstColor A="255" R="150" G="200" B="255" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>