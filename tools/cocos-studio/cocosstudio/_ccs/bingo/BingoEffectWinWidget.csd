<GameFile>
  <PropertyGroup Name="BingoEffectWinWidget" Type="Node" ID="740d0ce8-4b37-49d7-875f-287a9a4c8e64" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="80" Speed="1.0000" ActivedAnimationName="show">
        <Timeline ActionTag="-533864715" Property="Scale">
          <ScaleFrame FrameIndex="0" X="0.0010" Y="0.0010">
            <EasingData Type="26" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="20" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="70" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="80" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-533864715" Property="Alpha">
          <IntFrame FrameIndex="0" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="20" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="70" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="80" Value="0">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
        <Timeline ActionTag="48234367" Property="Position">
          <PointFrame FrameIndex="0" X="320.0000" Y="360.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="10" X="320.0000" Y="384.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="40" X="320.0000" Y="360.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="70" X="320.0000" Y="384.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="80" X="320.0000" Y="384.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="48234367" Property="Scale">
          <ScaleFrame FrameIndex="0" X="0.0010" Y="0.0010">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="10" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="70" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="80" X="0.0010" Y="0.0010">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="48234367" Property="Alpha">
          <IntFrame FrameIndex="0" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="10" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="70" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="80" Value="0">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="show" StartIndex="0" EndIndex="80">
          <RenderColor A="255" R="0" G="255" B="255" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="100" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_layoutRoot" ActionTag="1315252305" Tag="3273" IconVisible="False" LeftMargin="-320.0000" RightMargin="-320.0000" TopMargin="-320.0000" BottomMargin="-320.0000" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="640.0000" Y="640.0000" />
            <Children>
              <AbstractNodeData Name="_imgGlow" ActionTag="-533864715" Alpha="0" Tag="3274" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" TopMargin="-95.5000" BottomMargin="-95.5000" LeftEage="211" RightEage="211" TopEage="274" BottomEage="274" Scale9OriginX="211" Scale9OriginY="274" Scale9Width="218" Scale9Height="283" ctype="ImageViewObjectData">
                <Size X="640.0000" Y="831.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="320.0000" />
                <Scale ScaleX="0.0010" ScaleY="0.0010" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.0000" Y="1.2984" />
                <FileData Type="PlistSubImage" Path="bingo/ui/GlowWin.png" Plist="sprite-sheets/Bingo.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgEmo" ActionTag="48234367" Alpha="0" Tag="3275" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="231.0000" RightMargin="231.0000" TopMargin="138.5000" BottomMargin="218.5000" LeftEage="104" RightEage="104" TopEage="92" BottomEage="92" Scale9OriginX="74" Scale9OriginY="92" Scale9Width="30" Scale9Height="99" ctype="ImageViewObjectData">
                <Size X="178.0000" Y="283.0000" />
                <Children>
                  <AbstractNodeData Name="_imgRibbon" ActionTag="-324962987" Tag="3276" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="-163.0000" RightMargin="-163.0000" TopMargin="174.5000" BottomMargin="-88.5000" FlipY="True" LeftEage="104" RightEage="104" TopEage="54" BottomEage="54" Scale9OriginX="104" Scale9OriginY="54" Scale9Width="218" Scale9Height="100" ctype="ImageViewObjectData">
                    <Size X="504.0000" Y="197.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="89.0000" Y="10.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.0353" />
                    <PreSize X="2.8315" Y="0.6961" />
                    <FileData Type="PlistSubImage" Path="basics/popup/HeaderRed_02.png" Plist="sprite-sheets/Basics.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_imgText" ActionTag="1059749336" Tag="14788" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="-22.0000" RightMargin="-22.0000" TopMargin="282.0000" BottomMargin="-53.0000" LeftEage="73" RightEage="73" TopEage="17" BottomEage="17" Scale9OriginX="73" Scale9OriginY="17" Scale9Width="76" Scale9Height="20" ctype="ImageViewObjectData">
                    <Size X="222.0000" Y="54.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="89.0000" Y="-26.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="-0.0919" />
                    <PreSize X="1.2472" Y="0.1908" />
                    <FileData Type="PlistSubImage" Path="texts/minigames/YouWon.png" Plist="sprite-sheets/Text_EN.plist" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="360.0000" />
                <Scale ScaleX="0.0010" ScaleY="0.0010" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5625" />
                <PreSize X="0.2781" Y="0.4422" />
                <FileData Type="PlistSubImage" Path="bingo/ui/EmojiWin.png" Plist="sprite-sheets/Bingo.plist" />
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