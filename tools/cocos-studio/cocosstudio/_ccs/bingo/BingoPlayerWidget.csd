<GameFile>
  <PropertyGroup Name="BingoPlayerWidget" Type="Node" ID="6bc2f543-a34e-4b2d-a6a1-d95a213fc767" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="60" Speed="1.0000">
        <Timeline ActionTag="-257582162" Property="Position">
          <PointFrame FrameIndex="0" X="29.1924" Y="34.5000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="60" X="116.8002" Y="34.5000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="1373923397" Property="Position">
          <PointFrame FrameIndex="0" X="99.2800" Y="34.5000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="60" X="46.7200" Y="34.5000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-1337515470" Property="Position">
          <PointFrame FrameIndex="0" X="29.1924" Y="34.5000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="60" X="116.8002" Y="34.5000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-1337515470" Property="Scale">
          <ScaleFrame FrameIndex="0" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-1337515470" Property="RotationSkew">
          <ScaleFrame FrameIndex="0" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="1612433274" Property="Position">
          <PointFrame FrameIndex="0" X="29.1924" Y="62.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="60" X="116.8002" Y="62.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="1612433274" Property="Scale">
          <ScaleFrame FrameIndex="0" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="1612433274" Property="RotationSkew">
          <ScaleFrame FrameIndex="0" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="playerLeft" StartIndex="0" EndIndex="0">
          <RenderColor A="255" R="0" G="0" B="0" />
        </AnimationInfo>
        <AnimationInfo Name="playerRight" StartIndex="60" EndIndex="60">
          <RenderColor A="255" R="219" G="112" B="147" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="152" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_widgetProfile" ActionTag="1347396959" Tag="1955" IconVisible="False" LeftMargin="-76.5000" RightMargin="-76.5000" TopMargin="-57.5000" BottomMargin="-57.5000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="153.0000" Y="115.0000" />
            <Children>
              <AbstractNodeData Name="_layoutBackground" ActionTag="56018870" Tag="1957" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="153.0000" Y="115.0000" />
                <Children>
                  <AbstractNodeData Name="_imgBackground" ActionTag="-1574254201" Tag="1958" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" Scale9Enable="True" LeftEage="21" RightEage="21" TopEage="21" BottomEage="21" Scale9OriginX="21" Scale9OriginY="21" Scale9Width="111" Scale9Height="73" ctype="ImageViewObjectData">
                    <Size X="153.0000" Y="115.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="76.5000" Y="57.5000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="1.0000" Y="1.0000" />
                    <FileData Type="PlistSubImage" Path="bingo/ui/PlayerContainerBackground_02.png" Plist="sprite-sheets/Bingo.plist" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint />
                <Position />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="1.0000" Y="1.0000" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_nodeAvatar" ActionTag="-257582162" Tag="966" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="29.1924" RightMargin="123.8076" TopMargin="80.5000" BottomMargin="34.5000" ctype="SingleNodeObjectData">
                <Size X="0.0000" Y="0.0000" />
                <Children>
                  <AbstractNodeData Name="_imgAvatarBackground" ActionTag="803418287" Tag="16015" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftEage="65" RightEage="65" TopEage="66" BottomEage="66" Scale9OriginX="65" Scale9OriginY="66" Scale9Width="67" Scale9Height="69" ctype="ImageViewObjectData">
                    <Size X="0.0000" Y="0.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition />
                    <PreSize X="0.0000" Y="0.0000" />
                    <FileData Type="PlistSubImage" Path="bingo/ui/AvatarBackground.png" Plist="sprite-sheets/Bingo.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_imgAvatarFrame" ActionTag="1925692729" Tag="16016" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftEage="65" RightEage="65" TopEage="66" BottomEage="66" Scale9OriginX="65" Scale9OriginY="66" Scale9Width="67" Scale9Height="65" ctype="ImageViewObjectData">
                    <Size X="0.0000" Y="0.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition />
                    <PreSize X="0.0000" Y="0.0000" />
                    <FileData Type="PlistSubImage" Path="bingo/ui/AvatarFrame.png" Plist="sprite-sheets/Bingo.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_avatarNode" ActionTag="-672088198" Tag="967" FrameEvent="Avatar" IconVisible="False" LeftMargin="-23.0000" RightMargin="-23.0000" TopMargin="-23.0000" BottomMargin="-23.0000" LeftEage="42" RightEage="42" TopEage="42" BottomEage="42" Scale9OriginX="42" Scale9OriginY="42" Scale9Width="44" Scale9Height="44" ctype="ImageViewObjectData">
                    <Size X="46.0000" Y="46.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition />
                    <PreSize X="0.0000" Y="0.0000" />
                    <FileData Type="Normal" Path="_temp/sprites/avatars/AvatarCircle.png" Plist="" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint />
                <Position X="29.1924" Y="34.5000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.1908" Y="0.3000" />
                <PreSize X="0.0000" Y="0.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutInfo" ActionTag="1373923397" Tag="1964" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="58.2500" RightMargin="12.6900" TopMargin="53.8787" BottomMargin="7.8787" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="82.0600" Y="53.2425" />
                <Children>
                  <AbstractNodeData Name="_txtLevel" ActionTag="-352032481" UserData="EmptyString" Tag="156" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" BottomMargin="33.2425" IsCustomSize="True" FontSize="18" LabelText="lv. 123" HorizontalAlignmentType="HT_Center" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="82.0600" Y="20.0000" />
                    <AnchorPoint ScaleY="1.0000" />
                    <Position Y="53.2425" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition Y="1.0000" />
                    <PreSize X="1.0000" Y="0.3756" />
                    <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                    <OutlineColor A="255" R="0" G="0" B="0" />
                    <ShadowColor A="255" R="110" G="110" B="110" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_txtWaiting" ActionTag="-1733848385" Tag="204" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" TopMargin="27.7697" BottomMargin="6.4728" IsCustomSize="True" FontSize="17" LabelText="WATING" HorizontalAlignmentType="HT_Center" OutlineSize="2" ShadowOffsetX="1.0000" ShadowOffsetY="-1.0000" ctype="TextObjectData">
                    <Size X="82.0600" Y="19.0000" />
                    <AnchorPoint ScaleY="0.5000" />
                    <Position Y="15.9728" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="125" G="169" B="236" />
                    <PrePosition Y="0.3000" />
                    <PreSize X="1.0000" Y="0.3569" />
                    <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                    <OutlineColor A="255" R="86" G="47" B="31" />
                    <ShadowColor A="255" R="86" G="47" B="31" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="99.2800" Y="34.5000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.6489" Y="0.3000" />
                <PreSize X="0.5363" Y="0.4630" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_ticketWidget" ActionTag="-1209612805" Tag="1101" FrameEvent="BingoTicketWidget" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="76.5000" RightMargin="76.5000" TopMargin="28.7500" BottomMargin="86.2500" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                <Size X="0.0000" Y="0.0000" />
                <AnchorPoint />
                <Position X="76.5000" Y="86.2500" />
                <Scale ScaleX="0.4700" ScaleY="0.4700" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.7500" />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="Normal" Path="_ccs/bingo/BingoTicketWidget.csd" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutEffect" Visible="False" ActionTag="804173248" Tag="3277" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="153.0000" Y="115.0000" />
                <Children>
                  <AbstractNodeData Name="_effectWinWidget" ActionTag="-1998895347" VisibleForFrame="False" Tag="3278" FrameEvent="BingoEffectWinWidget" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="76.5000" RightMargin="76.5000" TopMargin="57.5000" BottomMargin="57.5000" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                    <Size X="0.0000" Y="0.0000" />
                    <AnchorPoint />
                    <Position X="76.5000" Y="57.5000" />
                    <Scale ScaleX="0.3000" ScaleY="0.3000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="0.0000" Y="0.0000" />
                    <FileData Type="Normal" Path="_ccs/bingo/BingoEffectWinWidget.csd" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_effectLoseWidget" ActionTag="-1511967304" VisibleForFrame="False" Tag="3284" FrameEvent="BingoEffectLoseWidget" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="76.5000" RightMargin="76.5000" TopMargin="57.5000" BottomMargin="57.5000" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                    <Size X="0.0000" Y="0.0000" />
                    <AnchorPoint />
                    <Position X="76.5000" Y="57.5000" />
                    <Scale ScaleX="0.3000" ScaleY="0.3000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="0.0000" Y="0.0000" />
                    <FileData Type="Normal" Path="_ccs/bingo/BingoEffectLoseWidget.csd" Plist="" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint />
                <Position />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="1.0000" Y="1.0000" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutInteract" Visible="False" ActionTag="-853735135" Tag="18155" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="153.0000" Y="115.0000" />
                <Children>
                  <AbstractNodeData Name="_nodeInteract" ActionTag="-1337515470" Tag="18170" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="29.1924" RightMargin="123.8076" TopMargin="80.5000" BottomMargin="34.5000" ctype="SingleNodeObjectData">
                    <Size X="0.0000" Y="0.0000" />
                    <AnchorPoint />
                    <Position X="29.1924" Y="34.5000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.1908" Y="0.3000" />
                    <PreSize X="0.0000" Y="0.0000" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint />
                <Position />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="1.0000" Y="1.0000" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgCrown" ActionTag="1612433274" VisibleForFrame="False" Tag="23583" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="15.1924" RightMargin="109.8076" TopMargin="42.5000" BottomMargin="51.5000" LeftEage="64" RightEage="64" TopEage="46" BottomEage="46" Scale9OriginX="64" Scale9OriginY="46" Scale9Width="68" Scale9Height="49" ctype="ImageViewObjectData">
                <Size X="28.0000" Y="21.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="29.1924" Y="62.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.1908" Y="0.5391" />
                <PreSize X="0.1830" Y="0.1826" />
                <FileData Type="PlistSubImage" Path="bingo/ui/Crown.png" Plist="sprite-sheets/Bingo.plist" />
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