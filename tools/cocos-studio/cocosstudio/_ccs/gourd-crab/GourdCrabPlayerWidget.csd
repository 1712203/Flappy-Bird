<GameFile>
  <PropertyGroup Name="GourdCrabPlayerWidget" Type="Node" ID="ea930ff4-802a-4573-a94f-9ec355911b7e" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="90" Speed="1.0000" ActivedAnimationName="reset">
        <Timeline ActionTag="-257582162" Property="Position">
          <PointFrame FrameIndex="0" X="42.5000" Y="73.5000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="30" X="-42.5000" Y="73.5000">
            <EasingData Type="5" />
          </PointFrame>
          <PointFrame FrameIndex="60" X="42.5000" Y="73.5000">
            <EasingData Type="4" />
          </PointFrame>
          <PointFrame FrameIndex="90" X="-42.5000" Y="73.5000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-257582162" Property="Alpha">
          <IntFrame FrameIndex="0" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="30" Value="0">
            <EasingData Type="5" />
          </IntFrame>
          <IntFrame FrameIndex="60" Value="255">
            <EasingData Type="4" />
          </IntFrame>
          <IntFrame FrameIndex="90" Value="0">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
        <Timeline ActionTag="-352032481" Property="Position">
          <PointFrame FrameIndex="0" X="42.5000" Y="17.5700">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="30" X="-42.5000" Y="17.5700">
            <EasingData Type="11" />
          </PointFrame>
          <PointFrame FrameIndex="60" X="42.5000" Y="17.5700">
            <EasingData Type="10" />
          </PointFrame>
          <PointFrame FrameIndex="90" X="-42.5000" Y="17.5700">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-352032481" Property="Alpha">
          <IntFrame FrameIndex="0" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="30" Value="0">
            <EasingData Type="5" />
          </IntFrame>
          <IntFrame FrameIndex="60" Value="255">
            <EasingData Type="4" />
          </IntFrame>
          <IntFrame FrameIndex="90" Value="0">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="playerJoin" StartIndex="30" EndIndex="60">
          <RenderColor A="255" R="0" G="0" B="0" />
        </AnimationInfo>
        <AnimationInfo Name="playerLeave" StartIndex="60" EndIndex="90">
          <RenderColor A="255" R="219" G="112" B="147" />
        </AnimationInfo>
        <AnimationInfo Name="reset" StartIndex="0" EndIndex="0">
          <RenderColor A="255" R="255" G="235" B="205" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="152" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_widgetProfile" ActionTag="1347396959" Tag="1955" IconVisible="False" LeftMargin="-42.5000" RightMargin="-42.5000" TopMargin="-42.5000" BottomMargin="-42.5000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="85.0000" Y="85.0000" />
            <Children>
              <AbstractNodeData Name="_layoutClipping" ActionTag="1590368294" Tag="23313" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" BottomMargin="-31.2035" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="85.0000" Y="116.2035" />
                <Children>
                  <AbstractNodeData Name="_nodeAvatar" ActionTag="-257582162" Tag="966" IconVisible="True" PositionPercentXEnabled="True" LeftMargin="42.5000" RightMargin="42.5000" TopMargin="42.7035" BottomMargin="73.5000" ctype="SingleNodeObjectData">
                    <Size X="0.0000" Y="0.0000" />
                    <Children>
                      <AbstractNodeData Name="_avatarNode" ActionTag="-672088198" Tag="967" FrameEvent="Avatar" IconVisible="False" LeftMargin="-42.5000" RightMargin="-42.5000" TopMargin="-42.5000" BottomMargin="-42.5000" LeftEage="42" RightEage="42" TopEage="42" BottomEage="42" Scale9OriginX="42" Scale9OriginY="42" Scale9Width="44" Scale9Height="44" ctype="ImageViewObjectData">
                        <Size X="85.0000" Y="85.0000" />
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
                    <Position X="42.5000" Y="73.5000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.6325" />
                    <PreSize X="0.0000" Y="0.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_txtPlayerName" ActionTag="-352032481" UserData="EmptyString" Tag="156" IconVisible="False" PositionPercentXEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" TopMargin="83.6335" BottomMargin="2.5700" IsCustomSize="True" FontSize="25" LabelText="Player" HorizontalAlignmentType="HT_Center" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="85.0000" Y="30.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="42.5000" Y="17.5700" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="203" B="0" />
                    <PrePosition X="0.5000" Y="0.1512" />
                    <PreSize X="1.0000" Y="0.2582" />
                    <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                    <OutlineColor A="255" R="0" G="0" B="0" />
                    <ShadowColor A="255" R="110" G="110" B="110" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                <Position X="42.5000" Y="85.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="1.0000" />
                <PreSize X="1.0000" Y="1.3671" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutInteract" ActionTag="-853735135" Tag="18155" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="85.0000" Y="85.0000" />
                <Children>
                  <AbstractNodeData Name="_nodeInteract" ActionTag="-1337515470" Tag="18170" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="42.5000" RightMargin="42.5000" TopMargin="42.5000" BottomMargin="42.5000" ctype="SingleNodeObjectData">
                    <Size X="0.0000" Y="0.0000" />
                    <AnchorPoint />
                    <Position X="42.5000" Y="42.5000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
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
              <AbstractNodeData Name="_imgCrown" ActionTag="1612433274" VisibleForFrame="False" Tag="23583" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="17.5000" RightMargin="17.5000" TopMargin="-28.0000" BottomMargin="75.0000" LeftEage="64" RightEage="64" TopEage="46" BottomEage="46" Scale9OriginX="64" Scale9OriginY="46" Scale9Width="68" Scale9Height="49" ctype="ImageViewObjectData">
                <Size X="50.0000" Y="38.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="42.5000" Y="94.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="1.1059" />
                <PreSize X="0.5882" Y="0.4471" />
                <FileData Type="PlistSubImage" Path="bingo/ui/Crown.png" Plist="sprite-sheets/Bingo.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_txtCoinWin" ActionTag="1614984305" UserData="EmptyString" Tag="1505" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="-9.0000" RightMargin="8.0000" TopMargin="40.9999" BottomMargin="16.0001" FontSize="23" LabelText="+ 0.000" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-1.0000" ShadowEnabled="True" ctype="TextObjectData">
                <Size X="86.0000" Y="28.0000" />
                <Children>
                  <AbstractNodeData Name="_imgIconCoinWin" ActionTag="321087284" Tag="1506" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="86.0000" RightMargin="-24.0000" TopMargin="2.0000" BottomMargin="2.0000" LeftEage="42" RightEage="42" TopEage="42" BottomEage="42" Scale9OriginX="42" Scale9OriginY="42" Scale9Width="44" Scale9Height="44" ctype="ImageViewObjectData">
                    <Size X="24.0000" Y="24.0000" />
                    <AnchorPoint ScaleY="0.5000" />
                    <Position X="86.0000" Y="14.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="1.0000" Y="0.5000" />
                    <PreSize X="0.2791" Y="0.8571" />
                    <FileData Type="PlistSubImage" Path="icons/color/coins/Coin.png" Plist="sprite-sheets/Nocis.plist" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="34.0000" Y="30.0001" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="252" G="206" B="0" />
                <PrePosition X="0.4000" Y="0.3529" />
                <PreSize X="1.0118" Y="0.3294" />
                <FontResource Type="Normal" Path="fonts/LilitaOneRegular.ttf" Plist="" />
                <OutlineColor A="255" R="0" G="0" B="0" />
                <ShadowColor A="255" R="0" G="0" B="0" />
              </AbstractNodeData>
              <AbstractNodeData Name="_txtGemWin" ActionTag="-543749124" UserData="EmptyString" Tag="1503" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="-9.0000" RightMargin="8.0000" TopMargin="16.9999" BottomMargin="40.0001" FontSize="23" LabelText="+ 0.000" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-1.0000" ShadowEnabled="True" ctype="TextObjectData">
                <Size X="86.0000" Y="28.0000" />
                <Children>
                  <AbstractNodeData Name="_imgIconGemWin" ActionTag="1021147337" Tag="1504" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="86.0000" RightMargin="-24.0000" TopMargin="2.0000" BottomMargin="2.0000" LeftEage="42" RightEage="42" TopEage="42" BottomEage="42" Scale9OriginX="42" Scale9OriginY="42" Scale9Width="44" Scale9Height="44" ctype="ImageViewObjectData">
                    <Size X="24.0000" Y="24.0000" />
                    <AnchorPoint ScaleY="0.5000" />
                    <Position X="86.0000" Y="14.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="1.0000" Y="0.5000" />
                    <PreSize X="0.2791" Y="0.8571" />
                    <FileData Type="PlistSubImage" Path="icons/color/gems/Gem.png" Plist="sprite-sheets/Nocis.plist" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="34.0000" Y="54.0001" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="243" G="192" B="255" />
                <PrePosition X="0.4000" Y="0.6353" />
                <PreSize X="1.0118" Y="0.3294" />
                <FontResource Type="Normal" Path="fonts/LilitaOneRegular.ttf" Plist="" />
                <OutlineColor A="255" R="0" G="0" B="0" />
                <ShadowColor A="255" R="0" G="0" B="0" />
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