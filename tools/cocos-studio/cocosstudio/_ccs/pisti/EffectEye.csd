<GameFile>
  <PropertyGroup Name="EffectEye" Type="Node" ID="70e01b19-7266-4a39-b245-8892cba4ae78" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="40" Speed="0.5000" ActivedAnimationName="Show">
        <Timeline ActionTag="49349001" Property="Scale">
          <ScaleFrame FrameIndex="0" X="0.1000" Y="0.1000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="10" X="5.0000" Y="5.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="15" X="6.5000" Y="6.5000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="40" X="10.0000" Y="10.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="49349001" Property="Alpha">
          <IntFrame FrameIndex="0" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="5" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="40" Value="0">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
        <Timeline ActionTag="-1880418799" Property="Scale">
          <ScaleFrame FrameIndex="0" X="0.1000" Y="0.1000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="10" X="5.0000" Y="5.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="15" X="6.5000" Y="6.5000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="40" X="10.0000" Y="10.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-1880418799" Property="Alpha">
          <IntFrame FrameIndex="0" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="5" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="40" Value="0">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
        <Timeline ActionTag="-1487283938" Property="Scale">
          <ScaleFrame FrameIndex="0" X="0.1000" Y="0.1000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="10" X="1.2000" Y="1.2000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="13" X="0.9000" Y="0.9000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="15" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="40" X="1.2000" Y="1.2000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-1487283938" Property="Alpha">
          <IntFrame FrameIndex="0" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="10" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="20" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="38" Value="0">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
        <Timeline ActionTag="116083725" Property="Scale">
          <ScaleFrame FrameIndex="0" X="0.1000" Y="0.1000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="10" X="1.2000" Y="1.2000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="15" X="1.5000" Y="1.5000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="40" X="3.0000" Y="3.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="116083725" Property="Alpha">
          <IntFrame FrameIndex="0" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="10" Value="127">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="20" Value="0">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="Show" StartIndex="0" EndIndex="40">
          <RenderColor A="255" R="135" G="206" B="235" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="22" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_light01" ActionTag="49349001" Alpha="0" Tag="26" RotationSkewX="180.0000" RotationSkewY="180.0000" IconVisible="False" LeftMargin="-111.0446" RightMargin="-112.9554" TopMargin="-114.8591" BottomMargin="-109.1409" ctype="SpriteObjectData">
            <Size X="224.0000" Y="224.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="0.9554" Y="2.8591" />
            <Scale ScaleX="0.1000" ScaleY="0.1000" />
            <CColor A="255" R="255" G="255" B="0" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="PlistSubImage" Path="game/effects/Light_02.png" Plist="sprite-sheets/Game.plist" />
            <BlendFunc Src="770" Dst="1" />
          </AbstractNodeData>
          <AbstractNodeData Name="_light02" ActionTag="-1880418799" Alpha="0" Tag="25" RotationSkewX="180.0000" RotationSkewY="180.0000" IconVisible="False" LeftMargin="-121.0444" RightMargin="-102.9556" TopMargin="-124.8591" BottomMargin="-99.1409" ctype="SpriteObjectData">
            <Size X="224.0000" Y="224.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="-9.0444" Y="12.8591" />
            <Scale ScaleX="0.1000" ScaleY="0.1000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="PlistSubImage" Path="game/effects/Light_02.png" Plist="sprite-sheets/Game.plist" />
            <BlendFunc Src="770" Dst="1" />
          </AbstractNodeData>
          <AbstractNodeData Name="_eye01" ActionTag="-1487283938" Alpha="0" Tag="23" IconVisible="False" LeftMargin="-182.0000" RightMargin="-182.0000" TopMargin="-205.0000" BottomMargin="-205.0000" ctype="SpriteObjectData">
            <Size X="364.0000" Y="410.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position />
            <Scale ScaleX="0.1000" ScaleY="0.1000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="PlistSubImage" Path="game/effects/Eye.png" Plist="sprite-sheets/Game.plist" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="_eye02" ActionTag="116083725" Alpha="0" Tag="24" IconVisible="False" LeftMargin="-182.0000" RightMargin="-182.0000" TopMargin="-205.0000" BottomMargin="-205.0000" ctype="SpriteObjectData">
            <Size X="364.0000" Y="410.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position />
            <Scale ScaleX="0.1000" ScaleY="0.1000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="PlistSubImage" Path="game/effects/Eye.png" Plist="sprite-sheets/Game.plist" />
            <BlendFunc Src="770" Dst="1" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>