<GameFile>
  <PropertyGroup Name="FlappyBirdLayer" Type="Layer" ID="f9bbeb31-1337-479b-b746-5263a1eacc96" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="120" Speed="1.0000" ActivedAnimationName="idle">
        <Timeline ActionTag="1302802517" Property="Position">
          <PointFrame FrameIndex="0" X="640.0000" Y="0.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="120" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="1302802517" Property="Scale">
          <ScaleFrame FrameIndex="0" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="120" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="1302802517" Property="RotationSkew">
          <ScaleFrame FrameIndex="0" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="120" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="idle" StartIndex="0" EndIndex="120">
          <RenderColor A="150" R="189" G="183" B="107" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Layer" UserData="MainLayer" Tag="3" ctype="GameLayerObjectData">
        <Size X="640.0000" Y="1136.0000" />
        <Children>
          <AbstractNodeData Name="_layoutBgr" ActionTag="-695492301" UserData="FullScreenBackground" Tag="13613" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="640.0000" Y="1136.0000" />
            <Children>
              <AbstractNodeData Name="_imgBgr" ActionTag="1227603875" Tag="89" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftEage="95" RightEage="95" TopEage="168" BottomEage="168" Scale9OriginX="95" Scale9OriginY="168" Scale9Width="98" Scale9Height="176" ctype="ImageViewObjectData">
                <Size X="640.0000" Y="1136.0000" />
                <Children>
                  <AbstractNodeData Name="_nodeLand" ActionTag="1302802517" Tag="12" IconVisible="True" LeftMargin="640.0000" TopMargin="1136.0000" ctype="SingleNodeObjectData">
                    <Size X="0.0000" Y="0.0000" />
                    <Children>
                      <AbstractNodeData Name="_spriteLand1" ActionTag="783133402" Tag="10" IconVisible="False" LeftMargin="-488.0000" RightMargin="152.0000" TopMargin="-112.0000" ctype="SpriteObjectData">
                        <Size X="336.0000" Y="112.0000" />
                        <AnchorPoint ScaleX="0.5000" />
                        <Position X="-320.0000" />
                        <Scale ScaleX="1.9100" ScaleY="1.9100" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition />
                        <PreSize X="0.0000" Y="0.0000" />
                        <FileData Type="Normal" Path="sprites/flappy-bird/base.png" Plist="" />
                        <BlendFunc Src="770" Dst="771" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_spriteLand2" ActionTag="312016330" Tag="11" IconVisible="False" LeftMargin="152.0000" RightMargin="-488.0000" TopMargin="-112.0000" ctype="SpriteObjectData">
                        <Size X="336.0000" Y="112.0000" />
                        <AnchorPoint ScaleX="0.5000" />
                        <Position X="320.0000" />
                        <Scale ScaleX="1.9100" ScaleY="1.9100" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition />
                        <PreSize X="0.0000" Y="0.0000" />
                        <FileData Type="Normal" Path="sprites/flappy-bird/base.png" Plist="" />
                        <BlendFunc Src="770" Dst="771" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint />
                    <Position X="640.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="1.0000" />
                    <PreSize X="0.0000" Y="0.0000" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="568.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.0000" Y="1.0000" />
                <FileData Type="Normal" Path="sprites/flappy-bird/background-day.png" Plist="" />
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
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>