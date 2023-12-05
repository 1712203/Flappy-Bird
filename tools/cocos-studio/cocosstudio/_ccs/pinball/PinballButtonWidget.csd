<GameFile>
  <PropertyGroup Name="PinballButtonWidget" Type="Node" ID="c3e8fc31-c27f-43d9-a046-f41a374830da" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="150" Speed="1.0000" ActivedAnimationName="withBackground">
        <Timeline ActionTag="1865377717" Property="VisibleForFrame">
          <BoolFrame FrameIndex="0" Tween="False" Value="False" />
          <BoolFrame FrameIndex="10" Tween="False" Value="True" />
        </Timeline>
        <Timeline ActionTag="1484600178" Property="VisibleForFrame">
          <BoolFrame FrameIndex="0" Tween="False" Value="True" />
          <BoolFrame FrameIndex="10" Tween="False" Value="False" />
        </Timeline>
        <Timeline ActionTag="-182379480" Property="Position">
          <PointFrame FrameIndex="30" X="62.5000" Y="62.5000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="90" X="62.5000" Y="67.5000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="150" X="62.5000" Y="62.5000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-1807760307" Property="Position">
          <PointFrame FrameIndex="0" X="75.0000" Y="81.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="10" X="75.0000" Y="90.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-606530906" Property="VisibleForFrame">
          <BoolFrame FrameIndex="0" Tween="False" Value="False" />
          <BoolFrame FrameIndex="10" Tween="False" Value="True" />
        </Timeline>
        <Timeline ActionTag="-1205135257" Property="VisibleForFrame">
          <BoolFrame FrameIndex="0" Tween="False" Value="False" />
          <BoolFrame FrameIndex="10" Tween="False" Value="True" />
        </Timeline>
        <Timeline ActionTag="1288888538" Property="VisibleForFrame">
          <BoolFrame FrameIndex="0" Tween="False" Value="True" />
          <BoolFrame FrameIndex="10" Tween="False" Value="False" />
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="idle" StartIndex="30" EndIndex="150">
          <RenderColor A="255" R="0" G="191" B="255" />
        </AnimationInfo>
        <AnimationInfo Name="noBackground" StartIndex="0" EndIndex="0">
          <RenderColor A="255" R="205" G="92" B="92" />
        </AnimationInfo>
        <AnimationInfo Name="withBackground" StartIndex="10" EndIndex="10">
          <RenderColor A="255" R="255" G="218" B="185" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="414" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_root" ActionTag="-674442939" UserData="IgnoreFill" Tag="420" IconVisible="False" LeftMargin="-75.0000" RightMargin="-75.0000" TopMargin="-66.5000" BottomMargin="-66.5000" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="150.0000" Y="133.0000" />
            <Children>
              <AbstractNodeData Name="_imgBackground" ActionTag="1865377717" VisibleForFrame="False" Tag="421" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="-22.5000" RightMargin="-22.5000" TopMargin="-27.5000" BottomMargin="-27.5000" LeftEage="15" RightEage="15" TopEage="15" BottomEage="15" Scale9OriginX="15" Scale9OriginY="15" Scale9Width="165" Scale9Height="158" ctype="ImageViewObjectData">
                <Size X="195.0000" Y="188.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="75.0000" Y="66.5000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.3000" Y="1.4135" />
                <FileData Type="PlistSubImage" Path="buttons/hexagonal/Blue_02.png" Plist="sprite-sheets/Buttons.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imageShadow" ActionTag="1484600178" Alpha="247" Tag="2332" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="16.0000" RightMargin="10.0000" TopMargin="-1.0000" BottomMargin="-1.0000" LeftEage="40" RightEage="40" TopEage="44" BottomEage="44" Scale9OriginX="40" Scale9OriginY="44" Scale9Width="44" Scale9Height="47" ctype="ImageViewObjectData">
                <Size X="124.0000" Y="135.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="78.0000" Y="66.5000" />
                <Scale ScaleX="1.2000" ScaleY="1.2000" />
                <CColor A="255" R="184" G="120" B="73" />
                <PrePosition X="0.5200" Y="0.5000" />
                <PreSize X="0.8267" Y="1.0150" />
                <FileData Type="PlistSubImage" Path="home/MiniGameShadow.png" Plist="sprite-sheets/Home.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutIcon" ActionTag="-1807760307" Tag="2293" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="12.5000" RightMargin="12.5000" TopMargin="-10.5000" BottomMargin="18.5000" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="125.0000" Y="125.0000" />
                <Children>
                  <AbstractNodeData Name="_imgIcon" ActionTag="-182379480" Tag="422" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="2.5000" RightMargin="2.5000" TopMargin="20.5000" BottomMargin="20.5000" LeftEage="68" RightEage="68" TopEage="63" BottomEage="63" Scale9OriginX="52" Scale9OriginY="21" Scale9Width="16" Scale9Height="42" ctype="ImageViewObjectData">
                    <Size X="120.0000" Y="84.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="62.5000" Y="62.5000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="0.9600" Y="0.6720" />
                    <FileData Type="PlistSubImage" Path="home/IconPinball.png" Plist="sprite-sheets/Home.plist" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="75.0000" Y="81.0000" />
                <Scale ScaleX="1.2000" ScaleY="1.2000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.6090" />
                <PreSize X="0.8333" Y="0.9398" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgBgrText" ActionTag="-606530906" VisibleForFrame="False" Tag="1602" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="4.5000" RightMargin="4.5000" TopMargin="82.0266" BottomMargin="-0.0266" LeftEage="46" RightEage="46" TopEage="16" BottomEage="16" Scale9OriginX="46" Scale9OriginY="16" Scale9Width="49" Scale9Height="19" ctype="ImageViewObjectData">
                <Size X="141.0000" Y="51.0000" />
                <AnchorPoint ScaleX="0.5000" />
                <Position X="75.0000" Y="-0.0266" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="-0.0002" />
                <PreSize X="0.9400" Y="0.3835" />
                <FileData Type="PlistSubImage" Path="buttons/hexagonal/Blue_01.png" Plist="sprite-sheets/Buttons.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgText" ActionTag="-1205135257" VisibleForFrame="False" Tag="423" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="35.5500" RightMargin="33.4500" TopMargin="93.0916" BottomMargin="11.9084" LeftEage="22" RightEage="22" TopEage="8" BottomEage="8" Scale9OriginX="22" Scale9OriginY="8" Scale9Width="37" Scale9Height="12" ctype="ImageViewObjectData">
                <Size X="81.0000" Y="28.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="76.0500" Y="25.9084" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5070" Y="0.1948" />
                <PreSize X="0.5400" Y="0.2105" />
                <FileData Type="PlistSubImage" Path="texts/home/MiniGamePinball.png" Plist="sprite-sheets/Text_EN.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_txtText" ActionTag="1288888538" UserData="KeepString" Tag="2316" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="35.5000" RightMargin="35.5000" TopMargin="82.5000" BottomMargin="15.5000" FontSize="30" LabelText="PINBALL" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="79.0000" Y="35.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="75.0000" Y="33.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="186" B="153" />
                <PrePosition X="0.5000" Y="0.2481" />
                <PreSize X="0.5267" Y="0.2632" />
                <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                <OutlineColor A="255" R="73" G="28" B="3" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="_txtQuestionMark" Visible="False" ActionTag="-128378987" UserData="KeepString" Tag="521" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="47.0550" RightMargin="45.9450" TopMargin="-17.4400" BottomMargin="30.4400" FontSize="100" LabelText="?" OutlineSize="3" OutlineEnabled="True" ShadowOffsetX="0.0000" ShadowOffsetY="-5.0000" ShadowEnabled="True" ctype="TextObjectData">
                <Size X="57.0000" Y="120.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="75.5550" Y="90.4400" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5037" Y="0.6800" />
                <PreSize X="0.3800" Y="0.9023" />
                <FontResource Type="Normal" Path="fonts/LilitaOneRegular.ttf" Plist="" />
                <OutlineColor A="255" R="117" G="83" B="0" />
                <ShadowColor A="255" R="59" G="42" B="0" />
              </AbstractNodeData>
              <AbstractNodeData Name="_txtUnlock" ActionTag="1894555815" UserData="KeepString" Tag="520" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="28.5000" RightMargin="28.5000" TopMargin="77.2600" BottomMargin="18.7400" FontSize="30" LabelText="Unlock at" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineSize="2" OutlineEnabled="True" ShadowOffsetX="0.0000" ShadowOffsetY="-2.0000" ShadowEnabled="True" ctype="TextObjectData">
                <Size X="93.0000" Y="37.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="75.0000" Y="37.2400" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.2800" />
                <PreSize X="0.6200" Y="0.2782" />
                <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                <OutlineColor A="255" R="117" G="83" B="0" />
                <ShadowColor A="255" R="59" G="42" B="0" />
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