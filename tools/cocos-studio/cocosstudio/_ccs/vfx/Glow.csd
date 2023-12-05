<GameFile>
  <PropertyGroup Name="Glow" Type="Node" ID="4da860ef-8240-42a2-96d6-42376f1c3137" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="520" Speed="0.5000">
        <Timeline ActionTag="-1858038221" Property="Alpha">
          <IntFrame FrameIndex="20" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="80" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="140" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="200" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="260" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="320" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="380" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="440" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="500" Value="0">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
        <Timeline ActionTag="624514227" Property="RotationSkew">
          <ScaleFrame FrameIndex="20" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="260" X="180.0000" Y="180.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="500" X="360.0000" Y="360.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="1146763002" Property="RotationSkew">
          <ScaleFrame FrameIndex="20" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="260" X="-180.0000" Y="-180.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="500" X="-360.0000" Y="-360.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-325287374" Property="Alpha">
          <IntFrame FrameIndex="0" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="10" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="510" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="520" Value="0">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="Show" StartIndex="0" EndIndex="10">
          <RenderColor A="255" R="175" G="238" B="238" />
        </AnimationInfo>
        <AnimationInfo Name="Idle" StartIndex="20" EndIndex="500">
          <RenderColor A="255" R="240" G="255" B="255" />
        </AnimationInfo>
        <AnimationInfo Name="Hide" StartIndex="510" EndIndex="520">
          <RenderColor A="255" R="46" G="139" B="87" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="4177" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_root" ActionTag="-325287374" Alpha="0" Tag="171" IconVisible="True" ctype="SingleNodeObjectData">
            <Size X="0.0000" Y="0.0000" />
            <Children>
              <AbstractNodeData Name="_glow00" ActionTag="1107903863" Alpha="89" Tag="282" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="-179.0000" RightMargin="-179.0000" TopMargin="-179.0000" BottomMargin="-179.0000" ctype="SpriteObjectData">
                <Size X="358.0000" Y="358.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position />
                <Scale ScaleX="2.0000" ScaleY="-3.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="PlistSubImage" Path="vfx/glows/Glow_03.png" Plist="sprite-sheets/Vfx.plist" />
                <BlendFunc Src="1" Dst="771" />
              </AbstractNodeData>
              <AbstractNodeData Name="_glow01" ActionTag="-1858038221" Alpha="0" Tag="4180" IconVisible="False" LeftMargin="-179.0000" RightMargin="-179.0000" TopMargin="-179.0000" BottomMargin="-179.0000" ctype="SpriteObjectData">
                <Size X="358.0000" Y="358.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position />
                <Scale ScaleX="2.0000" ScaleY="2.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="PlistSubImage" Path="vfx/glows/Glow_03.png" Plist="sprite-sheets/Vfx.plist" />
                <BlendFunc Src="770" Dst="1" />
              </AbstractNodeData>
              <AbstractNodeData Name="_glow02" ActionTag="624514227" Alpha="178" Tag="4178" IconVisible="False" LeftMargin="-158.4998" RightMargin="-158.5002" TopMargin="-157.0000" BottomMargin="-157.0000" ctype="SpriteObjectData">
                <Size X="317.0000" Y="314.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="0.0002" />
                <Scale ScaleX="3.5000" ScaleY="3.5000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="PlistSubImage" Path="vfx/glows/Glow_01.png" Plist="sprite-sheets/Vfx.plist" />
                <BlendFunc Src="770" Dst="1" />
              </AbstractNodeData>
              <AbstractNodeData Name="_glow03" ActionTag="1146763002" Alpha="178" Tag="4179" IconVisible="False" LeftMargin="-148.4998" RightMargin="-168.5002" TopMargin="-147.0000" BottomMargin="-167.0000" ctype="SpriteObjectData">
                <Size X="317.0000" Y="314.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="10.0002" Y="-10.0000" />
                <Scale ScaleX="3.0000" ScaleY="3.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="PlistSubImage" Path="vfx/glows/Glow_01.png" Plist="sprite-sheets/Vfx.plist" />
                <BlendFunc Src="770" Dst="1" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint />
            <Position />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>