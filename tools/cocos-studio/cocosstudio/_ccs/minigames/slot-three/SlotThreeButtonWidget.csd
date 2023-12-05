<GameFile>
  <PropertyGroup Name="SlotThreeButtonWidget" Type="Node" ID="df87ad41-47bf-4b5b-a694-07cdf08d821f" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="150" Speed="1.0000" ActivedAnimationName="idle">
        <Timeline ActionTag="1865377717" Property="VisibleForFrame">
          <BoolFrame FrameIndex="0" Tween="False" Value="True" />
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
          <PointFrame FrameIndex="0" X="82.5000" Y="89.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="10" X="82.5000" Y="108.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-606530906" Property="VisibleForFrame">
          <BoolFrame FrameIndex="0" Tween="False" Value="True" />
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
          <AbstractNodeData Name="_root" ActionTag="-674442939" Tag="420" IconVisible="False" LeftMargin="-82.5000" RightMargin="-82.5000" TopMargin="-82.5000" BottomMargin="-82.5000" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="165.0000" Y="165.0000" />
            <Children>
              <AbstractNodeData Name="_imgBackground" ActionTag="1865377717" Tag="421" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="-15.0000" RightMargin="-15.0000" TopMargin="-11.5000" BottomMargin="-11.5000" LeftEage="15" RightEage="15" TopEage="15" BottomEage="15" Scale9OriginX="15" Scale9OriginY="15" Scale9Width="165" Scale9Height="158" ctype="ImageViewObjectData">
                <Size X="195.0000" Y="188.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="82.5000" Y="82.5000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.1818" Y="1.1394" />
                <FileData Type="PlistSubImage" Path="buttons/hexagonal/Blue_02.png" Plist="sprite-sheets/Buttons.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imageShadow" ActionTag="1484600178" Alpha="247" Tag="2332" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="23.8000" RightMargin="17.2000" TopMargin="15.0000" BottomMargin="15.0000" LeftEage="40" RightEage="40" TopEage="44" BottomEage="44" Scale9OriginX="40" Scale9OriginY="44" Scale9Width="44" Scale9Height="47" ctype="ImageViewObjectData">
                <Size X="124.0000" Y="135.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="85.8000" Y="82.5000" />
                <Scale ScaleX="1.2000" ScaleY="1.2000" />
                <CColor A="255" R="189" G="115" B="0" />
                <PrePosition X="0.5200" Y="0.5000" />
                <PreSize X="0.7515" Y="0.8182" />
                <FileData Type="PlistSubImage" Path="home/MiniGameShadow.png" Plist="sprite-sheets/Home.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutIcon" ActionTag="-1807760307" Tag="2293" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="20.0000" RightMargin="20.0000" TopMargin="13.5000" BottomMargin="26.5000" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="125.0000" Y="125.0000" />
                <Children>
                  <AbstractNodeData Name="_imgIcon" ActionTag="-182379480" Tag="422" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="-41.0000" RightMargin="-41.0000" TopMargin="-33.0000" BottomMargin="-33.0000" LeftEage="68" RightEage="68" TopEage="63" BottomEage="63" Scale9OriginX="68" Scale9OriginY="63" Scale9Width="71" Scale9Height="65" ctype="ImageViewObjectData">
                    <Size X="207.0000" Y="191.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="62.5000" Y="62.5000" />
                    <Scale ScaleX="0.5900" ScaleY="0.5900" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="1.6560" Y="1.5280" />
                    <FileData Type="PlistSubImage" Path="home/IconSlotMachine.png" Plist="sprite-sheets/Home.plist" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="82.5000" Y="89.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5394" />
                <PreSize X="0.7576" Y="0.7576" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgBgrText" ActionTag="-606530906" Tag="1602" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="12.0000" RightMargin="12.0000" TopMargin="98.2500" BottomMargin="15.7500" LeftEage="46" RightEage="46" TopEage="16" BottomEage="16" Scale9OriginX="46" Scale9OriginY="16" Scale9Width="49" Scale9Height="19" ctype="ImageViewObjectData">
                <Size X="141.0000" Y="51.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="82.5000" Y="41.2500" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.2500" />
                <PreSize X="0.8545" Y="0.3091" />
                <FileData Type="PlistSubImage" Path="buttons/hexagonal/Blue_01.png" Plist="sprite-sheets/Buttons.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgText" ActionTag="-1205135257" VisibleForFrame="False" Tag="423" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="14.0000" RightMargin="14.0000" TopMargin="109.0000" BottomMargin="26.0000" LeftEage="42" RightEage="42" TopEage="21" BottomEage="21" Scale9OriginX="42" Scale9OriginY="9" Scale9Width="53" Scale9Height="12" ctype="ImageViewObjectData">
                <Size X="137.0000" Y="30.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="82.5000" Y="41.0000" />
                <Scale ScaleX="0.9000" ScaleY="0.9000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.2485" />
                <PreSize X="0.8303" Y="0.1818" />
                <FileData Type="PlistSubImage" Path="texts/home/MiniGameSlotMachine.png" Plist="sprite-sheets/Text_EN.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_txtText" ActionTag="1288888538" UserData="KeepString" Tag="2316" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="18.5000" RightMargin="18.5000" TopMargin="114.5000" BottomMargin="15.5000" FontSize="30" LabelText="JACKPOT SPIN" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="128.0000" Y="35.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="82.5000" Y="33.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="206" B="23" />
                <PrePosition X="0.5000" Y="0.2000" />
                <PreSize X="0.7758" Y="0.2121" />
                <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                <OutlineColor A="255" R="67" G="40" B="14" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="_txtQuestionMark" Visible="False" ActionTag="-128378987" UserData="KeepString" Tag="521" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="54.6105" RightMargin="53.3895" TopMargin="-7.2000" BottomMargin="52.2000" FontSize="100" LabelText="?" OutlineSize="3" OutlineEnabled="True" ShadowOffsetX="0.0000" ShadowOffsetY="-5.0000" ShadowEnabled="True" ctype="TextObjectData">
                <Size X="57.0000" Y="120.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="83.1105" Y="112.2000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5037" Y="0.6800" />
                <PreSize X="0.3455" Y="0.7273" />
                <FontResource Type="Normal" Path="fonts/LilitaOneRegular.ttf" Plist="" />
                <OutlineColor A="255" R="117" G="83" B="0" />
                <ShadowColor A="255" R="59" G="42" B="0" />
              </AbstractNodeData>
              <AbstractNodeData Name="_txtUnlock" Visible="False" ActionTag="1894555815" UserData="KeepString" Tag="520" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="36.0000" RightMargin="36.0000" TopMargin="100.3000" BottomMargin="27.7000" FontSize="30" LabelText="Unlock at" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineSize="2" OutlineEnabled="True" ShadowOffsetX="0.0000" ShadowOffsetY="-2.0000" ShadowEnabled="True" ctype="TextObjectData">
                <Size X="93.0000" Y="37.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="82.5000" Y="46.2000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.2800" />
                <PreSize X="0.5636" Y="0.2242" />
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