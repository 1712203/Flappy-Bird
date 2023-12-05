<GameFile>
  <PropertyGroup Name="BingoEffectLoseWidget_0" Type="Node" ID="9ca6c8b0-479d-4812-8604-bc5d348244ec" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="80" Speed="1.0000">
        <Timeline ActionTag="-239918019" Property="Scale">
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
        <Timeline ActionTag="-239918019" Property="Alpha">
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
        <Timeline ActionTag="-109449984" Property="Position">
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
        <Timeline ActionTag="-109449984" Property="Scale">
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
        <Timeline ActionTag="-109449984" Property="Alpha">
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
          <RenderColor A="255" R="245" G="245" B="245" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="104" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_layoutRoot" ActionTag="-10067547" Tag="3272" IconVisible="False" LeftMargin="-320.0000" RightMargin="-320.0000" TopMargin="-320.0000" BottomMargin="-320.0000" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="640.0000" Y="640.0000" />
            <Children>
              <AbstractNodeData Name="_imgGlow" ActionTag="-239918019" Alpha="0" Tag="107" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="-88.5000" RightMargin="-88.5000" TopMargin="-72.0000" BottomMargin="-72.0000" LeftEage="211" RightEage="211" TopEage="274" BottomEage="274" Scale9OriginX="211" Scale9OriginY="274" Scale9Width="395" Scale9Height="236" ctype="ImageViewObjectData">
                <Size X="817.0000" Y="784.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="320.0000" />
                <Scale ScaleX="0.0010" ScaleY="0.0010" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.2766" Y="1.2250" />
                <FileData Type="PlistSubImage" Path="bingo/ui/GlowLose.png" Plist="sprite-sheets/Bingo.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgEmo" ActionTag="-109449984" Alpha="0" Tag="106" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="219.0000" RightMargin="219.0000" TopMargin="130.5000" BottomMargin="210.5000" LeftEage="104" RightEage="104" TopEage="92" BottomEage="92" Scale9OriginX="98" Scale9OriginY="92" Scale9Width="6" Scale9Height="115" ctype="ImageViewObjectData">
                <Size X="202.0000" Y="299.0000" />
                <Children>
                  <AbstractNodeData Name="_imgRibbon" ActionTag="-143015534" Tag="105" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="-150.5000" RightMargin="-150.5000" TopMargin="177.5000" BottomMargin="-75.5000" FlipY="True" LeftEage="104" RightEage="104" TopEage="54" BottomEage="54" Scale9OriginX="104" Scale9OriginY="54" Scale9Width="220" Scale9Height="101" ctype="ImageViewObjectData">
                    <Size X="503.0000" Y="197.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="101.0000" Y="23.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.0769" />
                    <PreSize X="2.4901" Y="0.6589" />
                    <FileData Type="PlistSubImage" Path="basics/popup/HeaderGray.png" Plist="sprite-sheets/Basics.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_imgText" ActionTag="1179297394" Tag="14241" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="-6.0000" RightMargin="-6.0000" TopMargin="290.5000" BottomMargin="-40.5000" LeftEage="70" RightEage="70" TopEage="16" BottomEage="16" Scale9OriginX="70" Scale9OriginY="16" Scale9Width="74" Scale9Height="17" ctype="ImageViewObjectData">
                    <Size X="214.0000" Y="49.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="101.0000" Y="-16.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="-0.0535" />
                    <PreSize X="1.0594" Y="0.1639" />
                    <FileData Type="PlistSubImage" Path="texts/minigames/YouLose.png" Plist="sprite-sheets/Text_EN.plist" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="360.0000" />
                <Scale ScaleX="0.0010" ScaleY="0.0010" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5625" />
                <PreSize X="0.3156" Y="0.4672" />
                <FileData Type="PlistSubImage" Path="bingo/ui/EmojiLose.png" Plist="sprite-sheets/Bingo.plist" />
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