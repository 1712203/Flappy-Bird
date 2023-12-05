<GameFile>
  <PropertyGroup Name="MiniGameButtonWidget" Type="Node" ID="556825a5-2664-4feb-9fd3-5b45a7af5ade" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="120" Speed="1.0000" ActivedAnimationName="idle">
        <Timeline ActionTag="1259071653" Property="Position">
          <PointFrame FrameIndex="0" X="75.0000" Y="100.0000">
            <EasingData Type="3" />
          </PointFrame>
          <PointFrame FrameIndex="60" X="75.0000" Y="105.0000">
            <EasingData Type="3" />
          </PointFrame>
          <PointFrame FrameIndex="120" X="75.0000" Y="100.0000">
            <EasingData Type="3" />
          </PointFrame>
        </Timeline>
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
      </Animation>
      <AnimationList>
        <AnimationInfo Name="idle" StartIndex="0" EndIndex="120">
          <RenderColor A="255" R="119" G="136" B="153" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="30937" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_root" ActionTag="1788369806" UserData="IgnoreFill" Tag="31055" IconVisible="False" LeftMargin="-75.0000" RightMargin="-75.0000" TopMargin="-66.5000" BottomMargin="-66.5000" ClipAble="False" BackColorAlpha="102" ComboBoxIndex="1" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="150.0000" Y="133.0000" />
            <Children>
              <AbstractNodeData Name="_imgBackground" ActionTag="-1000185152" Tag="31056" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="3.5000" RightMargin="3.5000" TopMargin="-0.5000" BottomMargin="-0.5000" LeftEage="55" RightEage="55" TopEage="60" BottomEage="60" Scale9OriginX="55" Scale9OriginY="60" Scale9Width="33" Scale9Height="14" ctype="ImageViewObjectData">
                <Size X="143.0000" Y="134.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="75.0000" Y="66.5000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="0.9533" Y="1.0075" />
                <FileData Type="PlistSubImage" Path="buttons/hexagonal/Violet_02.png" Plist="sprite-sheets/Buttons.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgIcon" ActionTag="1259071653" Tag="821" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="29.0000" RightMargin="29.0000" TopMargin="-22.5000" BottomMargin="44.5000" LeftEage="45" RightEage="45" TopEage="44" BottomEage="44" Scale9OriginX="45" Scale9OriginY="44" Scale9Width="2" Scale9Height="23" ctype="ImageViewObjectData">
                <Size X="92.0000" Y="111.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="75.0000" Y="100.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.7519" />
                <PreSize X="0.6133" Y="0.8346" />
                <FileData Type="PlistSubImage" Path="home/IconOtherMinigames.png" Plist="sprite-sheets/Home.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgBgrText" ActionTag="644513819" Tag="1583" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="15.5000" RightMargin="15.5000" TopMargin="79.0300" BottomMargin="11.9700" LeftEage="39" RightEage="39" TopEage="13" BottomEage="13" Scale9OriginX="39" Scale9OriginY="13" Scale9Width="41" Scale9Height="16" ctype="ImageViewObjectData">
                <Size X="119.0000" Y="42.0000" />
                <AnchorPoint ScaleX="0.5000" />
                <Position X="75.0000" Y="11.9700" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.0900" />
                <PreSize X="0.7933" Y="0.3158" />
                <FileData Type="PlistSubImage" Path="buttons/hexagonal/Violet_01.png" Plist="sprite-sheets/Buttons.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgText" ActionTag="-1919154493" Tag="31058" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="28.0000" RightMargin="28.0000" TopMargin="81.1300" BottomMargin="-0.1300" LeftEage="39" RightEage="39" TopEage="21" BottomEage="21" Scale9OriginX="39" Scale9OriginY="21" Scale9Width="16" Scale9Height="10" ctype="ImageViewObjectData">
                <Size X="94.0000" Y="52.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                <Position X="75.0000" Y="51.8700" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.3900" />
                <PreSize X="0.6267" Y="0.3910" />
                <FileData Type="PlistSubImage" Path="texts/home/OtherMinigames.png" Plist="sprite-sheets/Text_EN.plist" />
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