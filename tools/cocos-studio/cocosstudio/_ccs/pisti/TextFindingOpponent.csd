<GameFile>
  <PropertyGroup Name="TextFindingOpponent" Type="Node" ID="7353adae-ffaf-4d35-905b-10161bb12fa5" Version="3.10.0.0" />
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
          <RenderColor A="150" R="135" G="206" B="250" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_spriteText" ActionTag="-2124588543" Tag="2" IconVisible="False" LeftMargin="-306.0000" TopMargin="-175.0000" ctype="SpriteObjectData">
            <Size X="306.0000" Y="175.0000" />
            <AnchorPoint ScaleX="1.0000" />
            <Position />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="PlistSubImage" Path="texts/game/FindingOpponent.png" Plist="sprite-sheets/Text_EN.plist" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="_spriteDot01" ActionTag="-1183253649" Tag="3" IconVisible="False" LeftMargin="-12.0000" RightMargin="-12.0000" TopMargin="-42.0000" BottomMargin="18.0000" ctype="SpriteObjectData">
            <Size X="24.0000" Y="24.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position Y="30.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="PlistSubImage" Path="texts/game/Dot.png" Plist="sprite-sheets/Text_TR.plist" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="_spriteDot02" ActionTag="618725365" VisibleForFrame="False" Tag="4" IconVisible="False" LeftMargin="18.0000" RightMargin="-42.0000" TopMargin="-42.0000" BottomMargin="18.0000" ctype="SpriteObjectData">
            <Size X="24.0000" Y="24.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="30.0000" Y="30.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="PlistSubImage" Path="texts/game/Dot.png" Plist="sprite-sheets/Text_TR.plist" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="_spriteDot03" ActionTag="-1089084352" VisibleForFrame="False" Tag="5" IconVisible="False" LeftMargin="48.0000" RightMargin="-72.0000" TopMargin="-42.0000" BottomMargin="18.0000" ctype="SpriteObjectData">
            <Size X="24.0000" Y="24.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="60.0000" Y="30.0000" />
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