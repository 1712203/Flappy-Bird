<GameFile>
  <PropertyGroup Name="BigBetButtonWidget" Type="Node" ID="dd87b029-4142-430f-b7a2-cb80a123fa53" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="120" Speed="1.0000" ActivedAnimationName="idle">
        <Timeline ActionTag="1259071653" Property="Scale">
          <ScaleFrame FrameIndex="0" X="1.0000" Y="1.0000">
            <EasingData Type="3" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="1.0050" Y="1.0100">
            <EasingData Type="3" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="120" X="1.0000" Y="1.0000">
            <EasingData Type="3" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="1259071653" Property="Position">
          <PointFrame FrameIndex="0" X="82.5000" Y="110.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="60" X="82.5000" Y="115.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="120" X="82.5000" Y="110.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="idle" StartIndex="0" EndIndex="120">
          <RenderColor A="255" R="119" G="136" B="153" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="30937" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_root" ActionTag="1788369806" UserData="IgnoreFill" Tag="31055" IconVisible="False" LeftMargin="-82.5000" RightMargin="-82.5000" TopMargin="-82.5000" BottomMargin="-82.5000" ClipAble="False" BackColorAlpha="102" ComboBoxIndex="1" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="165.0000" Y="165.0000" />
            <Children>
              <AbstractNodeData Name="_imgBackground" ActionTag="-1000185152" Tag="31056" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="-15.0000" RightMargin="-15.0000" TopMargin="-11.5000" BottomMargin="-11.5000" LeftEage="55" RightEage="55" TopEage="60" BottomEage="60" Scale9OriginX="55" Scale9OriginY="60" Scale9Width="85" Scale9Height="68" ctype="ImageViewObjectData">
                <Size X="195.0000" Y="188.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="82.5000" Y="82.5000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.1818" Y="1.1394" />
                <FileData Type="PlistSubImage" Path="buttons/hexagonal/Blue_02.png" Plist="sprite-sheets/Buttons.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgIcon" ActionTag="1259071653" Tag="821" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="23.0000" RightMargin="23.0000" TopMargin="-7.5000" BottomMargin="47.5000" LeftEage="45" RightEage="45" TopEage="44" BottomEage="44" Scale9OriginX="45" Scale9OriginY="44" Scale9Width="29" Scale9Height="37" ctype="ImageViewObjectData">
                <Size X="119.0000" Y="125.0000" />
                <Children>
                  <AbstractNodeData Name="_txtIcon" ActionTag="-1379987023" UserData="KeepString" Tag="3677" IconVisible="False" LeftMargin="-0.7196" RightMargin="2.7196" TopMargin="37.5646" BottomMargin="49.4354" FontSize="30" LabelText="x1~1000" OutlineSize="2" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="117.0000" Y="38.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="57.7804" Y="68.4354" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.4855" Y="0.5475" />
                    <PreSize X="0.9832" Y="0.3040" />
                    <FontResource Type="Normal" Path="fonts/LilitaOneRegular.ttf" Plist="" />
                    <OutlineColor A="255" R="0" G="0" B="0" />
                    <ShadowColor A="255" R="110" G="110" B="110" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="82.5000" Y="110.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.6667" />
                <PreSize X="0.7212" Y="0.7576" />
                <FileData Type="PlistSubImage" Path="bigbet/Star.png" Plist="sprite-sheets/BigBet.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgBgrText" ActionTag="-944439562" Tag="1593" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="12.0000" RightMargin="12.0000" TopMargin="98.2500" BottomMargin="15.7500" LeftEage="46" RightEage="46" TopEage="16" BottomEage="16" Scale9OriginX="46" Scale9OriginY="16" Scale9Width="49" Scale9Height="19" ctype="ImageViewObjectData">
                <Size X="141.0000" Y="51.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="82.5000" Y="41.2500" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.2500" />
                <PreSize X="0.8545" Y="0.3091" />
                <FileData Type="PlistSubImage" Path="buttons/hexagonal/Blue_01.png" Plist="sprite-sheets/Buttons.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgText" ActionTag="-1919154493" Tag="31058" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="45.0000" RightMargin="45.0000" TopMargin="109.2500" BottomMargin="26.7500" LeftEage="39" RightEage="39" TopEage="21" BottomEage="21" Scale9OriginX="36" Scale9OriginY="8" Scale9Width="3" Scale9Height="13" ctype="ImageViewObjectData">
                <Size X="75.0000" Y="29.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="82.5000" Y="41.2500" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.2500" />
                <PreSize X="0.4545" Y="0.1758" />
                <FileData Type="PlistSubImage" Path="texts/home/BigBet.png" Plist="sprite-sheets/Text_EN.plist" />
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