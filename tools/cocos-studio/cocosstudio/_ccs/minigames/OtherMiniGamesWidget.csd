<GameFile>
  <PropertyGroup Name="OtherMiniGamesWidget" Type="Node" ID="651bae28-d91a-4e6a-990c-5173b44e81cb" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="60" Speed="1.0000" ActivedAnimationName="hide">
        <Timeline ActionTag="1107627385" Property="Scale">
          <ScaleFrame FrameIndex="0" X="0.5400" Y="0.3200">
            <EasingData Type="3" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="25" X="1.0127" Y="1.0300">
            <EasingData Type="3" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="30" X="1.0000" Y="1.0000">
            <EasingData Type="3" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="0.5400" Y="0.3200">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="show" StartIndex="0" EndIndex="30">
          <RenderColor A="150" R="189" G="183" B="107" />
        </AnimationInfo>
        <AnimationInfo Name="hide" StartIndex="30" EndIndex="60">
          <RenderColor A="150" R="233" G="150" B="122" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="4149" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_root" ActionTag="428008308" Tag="4191" IconVisible="False" RightMargin="-297.0000" TopMargin="-500.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="297.0000" Y="500.0000" />
            <Children>
              <AbstractNodeData Name="_imgBgr" ActionTag="1107627385" Tag="4192" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" Scale9Enable="True" TopEage="134" BottomEage="134" Scale9OriginY="134" Scale9Width="297" Scale9Height="139" ctype="ImageViewObjectData">
                <Size X="297.0000" Y="500.0000" />
                <AnchorPoint />
                <Position />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="1.0000" Y="1.0000" />
                <FileData Type="PlistSubImage" Path="home/BoxMinigames.png" Plist="sprite-sheets/Home.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_btnOtherMiniGames" ActionTag="1840543961" Tag="4240" IconVisible="True" LeftMargin="77.0000" RightMargin="220.0000" TopMargin="430.0000" BottomMargin="70.0000" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                <Size X="0.0000" Y="0.0000" />
                <AnchorPoint />
                <Position X="77.0000" Y="70.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.2593" Y="0.1400" />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="Normal" Path="_ccs/minigames/MiniGameButtonWidget.csd" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="_gridViewOtherMiniGames" ActionTag="-1677050576" Tag="4193" FrameEvent="ck.GridViewVertical" IconVisible="False" PercentWidthEnable="True" PercentWidthEnabled="True" TopMargin="128.9999" BottomMargin="160.0001" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ComboBoxIndex="1" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="297.0000" Y="211.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="148.5000" Y="265.5001" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5310" />
                <PreSize X="1.0000" Y="0.4220" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint />
            <Position />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <SingleColor A="255" R="255" G="150" B="152" />
            <FirstColor A="255" R="150" G="200" B="255" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>