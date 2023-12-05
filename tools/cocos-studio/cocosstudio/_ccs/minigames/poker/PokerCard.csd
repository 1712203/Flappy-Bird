<GameFile>
  <PropertyGroup Name="PokerCard" Type="Node" ID="fa25fe09-5fed-4bba-ab0a-a73b62397f1d" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000" />
      <ObjectData Name="Node" Tag="221" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_layoutMain" ActionTag="-1295239425" Tag="6948" IconVisible="False" LeftMargin="-93.0000" RightMargin="-93.0000" TopMargin="-128.0000" BottomMargin="-128.0000" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="186.0000" Y="256.0000" />
            <Children>
              <AbstractNodeData Name="_layoutCard" ActionTag="2113439700" Tag="535" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="186.0000" Y="256.0000" />
                <Children>
                  <AbstractNodeData Name="_imgCardFaceDown" ActionTag="1420222510" Tag="537" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftEage="61" RightEage="61" TopEage="84" BottomEage="84" Scale9OriginX="61" Scale9OriginY="84" Scale9Width="64" Scale9Height="88" ctype="ImageViewObjectData">
                    <Size X="186.0000" Y="256.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="93.0000" Y="128.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="1.0000" Y="1.0000" />
                    <FileData Type="PlistSubImage" Path="cards/backs/Green.png" Plist="sprite-sheets/Cards.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_imgBlack" ActionTag="2027871992" Alpha="102" Tag="182" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftEage="61" RightEage="61" TopEage="84" BottomEage="84" Scale9OriginX="61" Scale9OriginY="84" Scale9Width="64" Scale9Height="88" ctype="ImageViewObjectData">
                    <Size X="186.0000" Y="256.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="93.0000" Y="128.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="0" G="0" B="0" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="1.0000" Y="1.0000" />
                    <FileData Type="PlistSubImage" Path="cards/backs/Blue.png" Plist="sprite-sheets/Cards.plist" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="93.0000" Y="128.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.0000" Y="1.0000" />
                <SingleColor A="255" R="255" G="0" B="12" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgHoldState" ActionTag="1548942105" Tag="538" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="3.6069" RightMargin="3.6069" TopMargin="203.4821" BottomMargin="6.7078" Scale9Enable="True" LeftEage="54" RightEage="54" TopEage="18" BottomEage="14" Scale9OriginX="54" Scale9OriginY="18" Scale9Width="8" Scale9Height="4" ctype="ImageViewObjectData">
                <Size X="178.7861" Y="45.8101" />
                <Children>
                  <AbstractNodeData Name="_txtHold" ActionTag="-602981933" Tag="539" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="53.1976" RightMargin="51.5885" TopMargin="-14.2877" BottomMargin="6.0978" FontSize="45" LabelText="HOLD" OutlineSize="2" OutlineEnabled="True" ShadowOffsetX="0.0000" ShadowOffsetY="-3.0000" ShadowEnabled="True" ctype="TextObjectData">
                    <Size X="74.0000" Y="54.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="90.1976" Y="33.0978" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5045" Y="0.7225" />
                    <PreSize X="0.4139" Y="1.1788" />
                    <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                    <OutlineColor A="255" R="0" G="0" B="0" />
                    <ShadowColor A="255" R="0" G="0" B="0" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="93.0000" Y="29.6129" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.1157" />
                <PreSize X="0.9612" Y="0.1789" />
                <FileData Type="PlistSubImage" Path="ui/HoldRibbon.png" Plist="sprite-sheets/Poker.plist" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <SingleColor A="255" R="0" G="84" B="177" />
            <FirstColor A="255" R="150" G="200" B="255" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>