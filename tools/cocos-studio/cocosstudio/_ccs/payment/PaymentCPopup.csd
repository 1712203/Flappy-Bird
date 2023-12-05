<GameFile>
  <PropertyGroup Name="PaymentCardPopup" Type="Node" ID="6ab2a065-3d77-4d2a-840c-961bfe983986" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000" />
      <ObjectData Name="Node" Tag="517" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_root" ActionTag="-1271069893" Tag="716" IconVisible="False" LeftMargin="-250.0000" RightMargin="-250.0000" TopMargin="-249.9999" BottomMargin="-250.0001" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="500.0000" Y="500.0000" />
            <Children>
              <AbstractNodeData Name="_imgBack" ActionTag="-537096674" Tag="717" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" Scale9Enable="True" LeftEage="69" RightEage="69" TopEage="57" BottomEage="57" Scale9OriginX="69" Scale9OriginY="57" Scale9Width="72" Scale9Height="61" ctype="ImageViewObjectData">
                <Size X="500.0000" Y="500.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="250.0000" Y="250.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.0000" Y="1.0000" />
                <FileData Type="PlistSubImage" Path="basics/popup/Back.png" Plist="sprite-sheets/Basics.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgFont" ActionTag="1662693790" Tag="718" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="16.1750" RightMargin="16.1750" TopMargin="16.1750" BottomMargin="16.1750" Scale9Enable="True" LeftEage="52" RightEage="52" TopEage="48" BottomEage="48" Scale9OriginX="52" Scale9OriginY="48" Scale9Width="49" Scale9Height="49" ctype="ImageViewObjectData">
                <Size X="467.6500" Y="467.6500" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="250.0000" Y="250.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="0.9353" Y="0.9353" />
                <FileData Type="PlistSubImage" Path="basics/popup/Font.png" Plist="sprite-sheets/Basics.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgHeader" ActionTag="-1699565694" Tag="719" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="77.0000" RightMargin="77.0000" TopMargin="-40.0000" BottomMargin="456.0000" LeftEage="114" RightEage="114" TopEage="27" BottomEage="27" Scale9OriginX="114" Scale9OriginY="27" Scale9Width="118" Scale9Height="30" ctype="ImageViewObjectData">
                <Size X="346.0000" Y="84.0000" />
                <Children>
                  <AbstractNodeData Name="_txtHeader" ActionTag="-912573543" Tag="720" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="94.5000" RightMargin="94.5000" TopMargin="5.3000" BottomMargin="13.7000" FontSize="55" LabelText="Card Info" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineSize="2" OutlineEnabled="True" ShadowOffsetX="0.0000" ShadowOffsetY="-2.0000" ShadowEnabled="True" ctype="TextObjectData">
                    <Size X="157.0000" Y="65.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="173.0000" Y="46.2000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="252" B="225" />
                    <PrePosition X="0.5000" Y="0.5500" />
                    <PreSize X="0.4538" Y="0.7738" />
                    <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                    <OutlineColor A="255" R="155" G="68" B="38" />
                    <ShadowColor A="255" R="155" G="68" B="38" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="250.0000" Y="498.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.9960" />
                <PreSize X="0.6920" Y="0.1680" />
                <FileData Type="PlistSubImage" Path="basics/popup/HeaderBlue.png" Plist="sprite-sheets/Basics.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_txtCardNumber" ActionTag="-225518626" Tag="721" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="50.0000" RightMargin="304.0000" TopMargin="73.4000" BottomMargin="387.6000" FontSize="35" LabelText="Card Number" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="146.0000" Y="39.0000" />
                <AnchorPoint ScaleY="0.5000" />
                <Position X="50.0000" Y="407.1000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="87" G="60" B="38" />
                <PrePosition X="0.1000" Y="0.8142" />
                <PreSize X="0.2920" Y="0.0780" />
                <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutEditBoxCardNumber" ActionTag="858035395" Tag="723" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="49.8044" RightMargin="51.8756" TopMargin="128.2700" BottomMargin="296.7300" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" LeftEage="84" RightEage="84" TopEage="84" BottomEage="84" Scale9OriginX="-84" Scale9OriginY="-84" Scale9Width="168" Scale9Height="168" ctype="PanelObjectData">
                <Size X="398.3200" Y="75.0000" />
                <Children>
                  <AbstractNodeData Name="_imgEditBoxCardNumber" ActionTag="882959085" Tag="724" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" Scale9Enable="True" LeftEage="5" RightEage="5" TopEage="3" BottomEage="3" Scale9OriginX="5" Scale9OriginY="3" Scale9Width="7" Scale9Height="6" ctype="ImageViewObjectData">
                    <Size X="398.3200" Y="75.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="199.1600" Y="37.5000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="1.0000" Y="1.0000" />
                    <FileData Type="PlistSubImage" Path="basics/other/BoxBrown.png" Plist="sprite-sheets/Basics.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_editBoxCardNumber" ActionTag="-1336520158" Tag="725" FrameEvent="cc.EditBox" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="39.8320" RightMargin="39.8320" IsCustomSize="True" FontSize="40" LabelText="Tap to enter" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="318.6560" Y="75.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="199.1600" Y="37.5000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="0.8000" Y="1.0000" />
                    <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                    <OutlineColor A="255" R="255" G="0" B="0" />
                    <ShadowColor A="255" R="110" G="110" B="110" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5026" ScaleY="0.5236" />
                <Position X="250.0000" Y="336.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.6720" />
                <PreSize X="0.7966" Y="0.1500" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgButton" ActionTag="648569983" Tag="726" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="147.0050" RightMargin="147.0050" TopMargin="380.9487" BottomMargin="38.0487" TouchEnable="True" LeftEage="85" RightEage="85" TopEage="33" BottomEage="33" Scale9OriginX="85" Scale9OriginY="33" Scale9Width="36" Scale9Height="15" ctype="ImageViewObjectData">
                <Size X="205.9900" Y="81.0026" />
                <Children>
                  <AbstractNodeData Name="_txtButton" ActionTag="1342774461" Tag="727" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="84.4950" RightMargin="84.4950" TopMargin="11.9512" BottomMargin="20.0514" FontSize="40" LabelText="Ok" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineSize="2" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="37.0000" Y="49.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="102.9950" Y="44.5514" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5500" />
                    <PreSize X="0.1796" Y="0.6049" />
                    <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                    <OutlineColor A="255" R="158" G="82" B="9" />
                    <ShadowColor A="255" R="110" G="110" B="110" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="250.0000" Y="78.5500" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.1571" />
                <PreSize X="0.4120" Y="0.1620" />
                <FileData Type="PlistSubImage" Path="buttons/rectangles/Yellow.png" Plist="sprite-sheets/Buttons.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgClose" ActionTag="890736326" Tag="728" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="444.5000" RightMargin="-25.5000" TopMargin="-26.5000" BottomMargin="443.5000" TouchEnable="True" LeftEage="26" RightEage="26" TopEage="33" BottomEage="33" Scale9OriginX="26" Scale9OriginY="33" Scale9Width="25" Scale9Height="14" ctype="ImageViewObjectData">
                <Size X="81.0000" Y="83.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="485.0000" Y="485.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.9700" Y="0.9700" />
                <PreSize X="0.1620" Y="0.1660" />
                <FileData Type="PlistSubImage" Path="buttons/rectangles/Close.png" Plist="sprite-sheets/Buttons.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutEditBoxPin" ActionTag="1137337478" Tag="771" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="49.8044" RightMargin="51.8756" TopMargin="259.6700" BottomMargin="165.3300" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" LeftEage="84" RightEage="84" TopEage="84" BottomEage="84" Scale9OriginX="-84" Scale9OriginY="-84" Scale9Width="168" Scale9Height="168" ctype="PanelObjectData">
                <Size X="398.3200" Y="75.0000" />
                <Children>
                  <AbstractNodeData Name="_imgEditBoxPin" ActionTag="231019234" Tag="772" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" Scale9Enable="True" LeftEage="4" RightEage="4" TopEage="4" BottomEage="4" Scale9OriginX="4" Scale9OriginY="4" Scale9Width="9" Scale9Height="4" ctype="ImageViewObjectData">
                    <Size X="398.3200" Y="75.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="199.1600" Y="37.5000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="1.0000" Y="1.0000" />
                    <FileData Type="PlistSubImage" Path="basics/other/BoxBrown.png" Plist="sprite-sheets/Basics.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_editBoxPin" ActionTag="189946718" UserData="Number" Tag="773" FrameEvent="cc.EditBox" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="39.8320" RightMargin="39.8320" IsCustomSize="True" FontSize="40" LabelText="Tap to enter" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="318.6560" Y="75.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="199.1600" Y="37.5000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="0.8000" Y="1.0000" />
                    <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                    <OutlineColor A="255" R="255" G="0" B="0" />
                    <ShadowColor A="255" R="110" G="110" B="110" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5026" ScaleY="0.5236" />
                <Position X="250.0000" Y="204.6000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.4092" />
                <PreSize X="0.7966" Y="0.1500" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_txtPin" ActionTag="1094253801" Tag="774" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="50.0000" RightMargin="414.0000" TopMargin="217.2000" BottomMargin="243.8000" FontSize="35" LabelText="Pin" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="36.0000" Y="39.0000" />
                <AnchorPoint ScaleY="0.5000" />
                <Position X="50.0000" Y="263.3000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="87" G="60" B="38" />
                <PrePosition X="0.1000" Y="0.5266" />
                <PreSize X="0.0720" Y="0.0780" />
                <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="_txtError" ActionTag="-495061186" UserData="EmptyString" Tag="722" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="181.5000" RightMargin="181.5000" TopMargin="340.5000" BottomMargin="126.5000" FontSize="30" LabelText="Error message" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="137.0000" Y="33.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="250.0000" Y="143.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="0" B="0" />
                <PrePosition X="0.5000" Y="0.2860" />
                <PreSize X="0.2740" Y="0.0660" />
                <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position Y="-0.0001" />
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