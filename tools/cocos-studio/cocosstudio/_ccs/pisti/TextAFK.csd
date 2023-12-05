<GameFile>
  <PropertyGroup Name="TextAFK" Type="Node" ID="14306781-1cee-4a67-8c89-7600f9e6ce91" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="100" Speed="1.0000" ActivedAnimationName="Idle">
        <Timeline ActionTag="-1183253649" Property="VisibleForFrame">
          <BoolFrame FrameIndex="0" Tween="False" Value="False" />
          <BoolFrame FrameIndex="25" Tween="False" Value="True" />
          <BoolFrame FrameIndex="100" Tween="False" Value="False" />
        </Timeline>
        <Timeline ActionTag="618725365" Property="VisibleForFrame">
          <BoolFrame FrameIndex="0" Tween="False" Value="False" />
          <BoolFrame FrameIndex="50" Tween="False" Value="True" />
          <BoolFrame FrameIndex="100" Tween="False" Value="False" />
        </Timeline>
        <Timeline ActionTag="-1089084352" Property="VisibleForFrame">
          <BoolFrame FrameIndex="0" Tween="False" Value="False" />
          <BoolFrame FrameIndex="75" Tween="False" Value="True" />
          <BoolFrame FrameIndex="100" Tween="False" Value="False" />
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="Idle" StartIndex="0" EndIndex="100">
          <RenderColor A="255" R="135" G="206" B="250" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_spriteDot01" ActionTag="-1183253649" Tag="3" IconVisible="False" LeftMargin="-40.9989" RightMargin="16.9989" TopMargin="-12.0000" BottomMargin="-12.0000" ctype="SpriteObjectData">
            <Size X="24.0000" Y="24.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="-28.9989" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="PlistSubImage" Path="texts/game/Dot.png" Plist="sprite-sheets/Text_TR.plist" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="_spriteDot02" ActionTag="618725365" Tag="4" IconVisible="False" LeftMargin="-10.9992" RightMargin="-13.0008" TopMargin="-12.0000" BottomMargin="-12.0000" ctype="SpriteObjectData">
            <Size X="24.0000" Y="24.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="1.0008" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="PlistSubImage" Path="texts/game/Dot.png" Plist="sprite-sheets/Text_TR.plist" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="_spriteDot03" ActionTag="-1089084352" Tag="5" IconVisible="False" LeftMargin="19.0009" RightMargin="-43.0009" TopMargin="-12.0000" BottomMargin="-12.0000" ctype="SpriteObjectData">
            <Size X="24.0000" Y="24.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="31.0009" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="PlistSubImage" Path="texts/game/Dot.png" Plist="sprite-sheets/Text_TR.plist" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>