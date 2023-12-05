<GameFile>
  <PropertyGroup Name="SpotLight" Type="Node" ID="e041522e-f8a6-4adb-a751-8c3ae8c50835" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="320" Speed="0.5000" ActivedAnimationName="Hide">
        <Timeline ActionTag="50935456" Property="RotationSkew">
          <ScaleFrame FrameIndex="20" X="6.0000" Y="6.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="79" X="-11.0000" Y="-11.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="115" X="-21.4400" Y="-21.4400">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="143" X="6.0000" Y="6.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="192" X="-11.0000" Y="-11.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="260" X="-18.0000" Y="-18.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="300" X="6.0000" Y="6.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-1050314857" Property="RotationSkew">
          <ScaleFrame FrameIndex="20" X="-6.0000" Y="-6.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="79" X="20.0000" Y="20.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="115" X="34.0000" Y="34.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="143" X="-6.0000" Y="-6.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="192" X="20.0000" Y="20.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="228" X="34.0000" Y="34.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="260" X="12.0000" Y="12.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="300" X="-6.0000" Y="-6.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-1954337910" Property="RotationSkew">
          <ScaleFrame FrameIndex="20" X="0.8913" Y="0.8913">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="71" X="-41.0000" Y="-41.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="140" X="0.8913" Y="0.8913">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="181" X="-41.0000" Y="-41.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="260" X="-27.0000" Y="-27.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="300" X="0.8913" Y="0.8913">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="1805295491" Property="RotationSkew">
          <ScaleFrame FrameIndex="20" X="-0.8913" Y="-0.8913">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="71" X="41.0000" Y="41.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="140" X="-0.8913" Y="-0.8913">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="181" X="41.0000" Y="41.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="260" X="27.0000" Y="27.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="300" X="-0.8913" Y="-0.8913">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="2101679611" Property="Alpha">
          <IntFrame FrameIndex="0" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="10" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="310" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="320" Value="0">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="Show" StartIndex="0" EndIndex="10">
          <RenderColor A="255" R="124" G="252" B="0" />
        </AnimationInfo>
        <AnimationInfo Name="Idle" StartIndex="20" EndIndex="300">
          <RenderColor A="255" R="173" G="216" B="230" />
        </AnimationInfo>
        <AnimationInfo Name="Hide" StartIndex="310" EndIndex="320">
          <RenderColor A="255" R="176" G="196" B="222" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="139" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_root" ActionTag="2101679611" Alpha="0" Tag="177" IconVisible="True" ctype="SingleNodeObjectData">
            <Size X="0.0000" Y="0.0000" />
            <Children>
              <AbstractNodeData Name="_light01" ActionTag="50935456" Alpha="216" Tag="238" RotationSkewX="6.0000" RotationSkewY="6.0000" IconVisible="False" LeftMargin="-135.7123" RightMargin="-51.2877" TopMargin="-914.9867" BottomMargin="41.9867" ctype="SpriteObjectData">
                <Size X="187.0000" Y="873.0000" />
                <AnchorPoint ScaleX="0.5000" />
                <Position X="-42.2123" Y="41.9867" />
                <Scale ScaleX="1.2000" ScaleY="1.2000" />
                <CColor A="255" R="255" G="218" B="79" />
                <PrePosition />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="PlistSubImage" Path="vfx/light/Spot.png" Plist="sprite-sheets/Vfx.plist" />
                <BlendFunc Src="770" Dst="1" />
              </AbstractNodeData>
              <AbstractNodeData Name="_light02" ActionTag="-1050314857" Alpha="216" Tag="241" RotationSkewX="-6.0000" RotationSkewY="-6.0000" IconVisible="False" LeftMargin="-44.3103" RightMargin="-142.6897" TopMargin="-904.9929" BottomMargin="31.9929" ctype="SpriteObjectData">
                <Size X="187.0000" Y="873.0000" />
                <AnchorPoint ScaleX="0.5000" />
                <Position X="49.1897" Y="31.9929" />
                <Scale ScaleX="1.2000" ScaleY="1.2000" />
                <CColor A="255" R="255" G="218" B="79" />
                <PrePosition />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="PlistSubImage" Path="vfx/light/Spot.png" Plist="sprite-sheets/Vfx.plist" />
                <BlendFunc Src="770" Dst="1" />
              </AbstractNodeData>
              <AbstractNodeData Name="_light03" ActionTag="-1954337910" Alpha="204" Tag="240" RotationSkewX="0.8913" RotationSkewY="0.8913" IconVisible="False" LeftMargin="-206.7236" RightMargin="19.7236" TopMargin="-894.9882" BottomMargin="21.9882" ctype="SpriteObjectData">
                <Size X="187.0000" Y="873.0000" />
                <AnchorPoint ScaleX="0.5000" />
                <Position X="-113.2236" Y="21.9882" />
                <Scale ScaleX="1.3000" ScaleY="1.3000" />
                <CColor A="255" R="116" G="221" B="255" />
                <PrePosition />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="PlistSubImage" Path="vfx/light/Spot.png" Plist="sprite-sheets/Vfx.plist" />
                <BlendFunc Src="770" Dst="1" />
              </AbstractNodeData>
              <AbstractNodeData Name="_light04" ActionTag="1805295491" Alpha="204" Tag="242" RotationSkewX="-0.8913" RotationSkewY="-0.8913" IconVisible="False" LeftMargin="16.6899" RightMargin="-203.6899" TopMargin="-884.9896" BottomMargin="11.9896" ctype="SpriteObjectData">
                <Size X="187.0000" Y="873.0000" />
                <AnchorPoint ScaleX="0.5000" />
                <Position X="110.1899" Y="11.9896" />
                <Scale ScaleX="1.3000" ScaleY="1.3000" />
                <CColor A="255" R="255" G="116" B="217" />
                <PrePosition />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="PlistSubImage" Path="vfx/light/Spot.png" Plist="sprite-sheets/Vfx.plist" />
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