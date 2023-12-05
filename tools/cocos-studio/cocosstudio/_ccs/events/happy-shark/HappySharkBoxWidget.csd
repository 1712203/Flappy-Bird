<GameFile>
  <PropertyGroup Name="HappySharkBoxWidget" Type="Node" ID="39f60475-051d-4a8e-8a46-ad9140fda6ce" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="110" Speed="0.5000" ActivedAnimationName="idle">
        <Timeline ActionTag="-1908010470" Property="Scale">
          <ScaleFrame FrameIndex="0" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="20" X="0.9500" Y="1.0200">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="50" X="1.0500" Y="0.9500">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="100" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="110" X="1.2000" Y="1.2000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-1908010470" Property="Alpha">
          <IntFrame FrameIndex="0" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="100" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="110" Value="0">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
        <Timeline ActionTag="1980768113" Property="Position">
          <PointFrame FrameIndex="0" X="50.0000" Y="50.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="20" X="50.0000" Y="65.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="50" X="50.0000" Y="47.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="60" X="50.0000" Y="50.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="idle" StartIndex="0" EndIndex="60">
          <RenderColor A="255" R="0" G="0" B="128" />
        </AnimationInfo>
        <AnimationInfo Name="broken" StartIndex="100" EndIndex="110">
          <RenderColor A="255" R="50" G="205" B="50" />
        </AnimationInfo>
        <AnimationInfo Name="reset" StartIndex="0" EndIndex="0">
          <RenderColor A="255" R="143" G="188" B="139" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="70" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_layoutRoot" ActionTag="-2056635401" Tag="1167" IconVisible="False" LeftMargin="-50.0000" RightMargin="-50.0000" TopMargin="-50.0000" BottomMargin="-50.0000" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="100.0000" Y="100.0000" />
            <Children>
              <AbstractNodeData Name="_layoutItem" ActionTag="1980768113" Tag="71" IconVisible="False" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="100.0000" Y="100.0000" />
                <Children>
                  <AbstractNodeData Name="_imgIcon" ActionTag="-1212730459" Tag="72" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="10.0000" RightMargin="10.0000" TopMargin="10.0000" BottomMargin="10.0000" LeftEage="32" RightEage="32" TopEage="31" BottomEage="31" Scale9OriginX="32" Scale9OriginY="31" Scale9Width="64" Scale9Height="66" ctype="ImageViewObjectData">
                    <Size X="80.0000" Y="80.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="50.0000" Y="50.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="0.8000" Y="0.8000" />
                    <FileData Type="PlistSubImage" Path="happy-shark/ui/Box.png" Plist="sprite-sheets/HappyShark.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_txtAmount" ActionTag="1292469770" UserData="EmptyString, fitSingleLine" Tag="93" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="13.0000" RightMargin="13.0000" TopMargin="51.0000" BottomMargin="11.0000" IsCustomSize="True" FontSize="30" LabelText="100K" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineSize="2" OutlineEnabled="True" ShadowOffsetX="0.0000" ShadowOffsetY="-1.0000" ctype="TextObjectData">
                    <Size X="74.0000" Y="38.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="50.0000" Y="30.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.3000" />
                    <PreSize X="0.7400" Y="0.3800" />
                    <FontResource Type="Normal" Path="fonts/LilitaOneRegular.ttf" Plist="" />
                    <OutlineColor A="255" R="0" G="16" B="47" />
                    <ShadowColor A="255" R="173" G="255" B="173" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_imgBgr" ActionTag="-1908010470" Tag="73" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="-5.0000" RightMargin="-5.0000" TopMargin="-5.0000" BottomMargin="-5.0000" LeftEage="31" RightEage="31" TopEage="31" BottomEage="31" Scale9OriginX="31" Scale9OriginY="31" Scale9Width="34" Scale9Height="33" ctype="ImageViewObjectData">
                    <Size X="110.0000" Y="110.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="50.0000" Y="50.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="1.1000" Y="1.1000" />
                    <FileData Type="PlistSubImage" Path="happy-shark/ui/BubbleNormal.png" Plist="sprite-sheets/HappyShark.plist" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="50.0000" Y="50.0000" />
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