<GameFile>
  <PropertyGroup Name="RefundBanPopup" Type="Node" ID="ba6e1cf2-a333-40c3-ac64-ec0701f9e9db" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000" />
      <ObjectData Name="Node" Tag="747" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_root" ActionTag="-176770705" Tag="1100" IconVisible="False" LeftMargin="-250.0000" RightMargin="-250.0000" TopMargin="-299.9999" BottomMargin="-300.0001" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="500.0000" Y="600.0000" />
            <Children>
              <AbstractNodeData Name="_imgBack" ActionTag="1705084976" Tag="1101" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" Scale9Enable="True" LeftEage="69" RightEage="69" TopEage="57" BottomEage="57" Scale9OriginX="69" Scale9OriginY="57" Scale9Width="72" Scale9Height="61" ctype="ImageViewObjectData">
                <Size X="500.0000" Y="600.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="250.0000" Y="300.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.0000" Y="1.0000" />
                <FileData Type="PlistSubImage" Path="basics/popup/Back.png" Plist="sprite-sheets/Basics.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgFont" ActionTag="1526156759" Tag="1102" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="16.1750" RightMargin="16.1750" TopMargin="19.4100" BottomMargin="19.4100" Scale9Enable="True" LeftEage="52" RightEage="52" TopEage="48" BottomEage="48" Scale9OriginX="52" Scale9OriginY="48" Scale9Width="49" Scale9Height="49" ctype="ImageViewObjectData">
                <Size X="467.6500" Y="561.1800" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="250.0000" Y="300.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="0.9353" Y="0.9353" />
                <FileData Type="PlistSubImage" Path="basics/popup/Font.png" Plist="sprite-sheets/Basics.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgHeader" ActionTag="-669006444" Tag="1104" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="77.0000" RightMargin="77.0000" TopMargin="-36.0000" BottomMargin="552.0000" LeftEage="114" RightEage="114" TopEage="27" BottomEage="27" Scale9OriginX="114" Scale9OriginY="27" Scale9Width="118" Scale9Height="30" ctype="ImageViewObjectData">
                <Size X="346.0000" Y="84.0000" />
                <Children>
                  <AbstractNodeData Name="_txtHeader" ActionTag="-33388643" Tag="1105" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="108.0000" RightMargin="108.0000" TopMargin="5.3000" BottomMargin="13.7000" FontSize="55" LabelText="Banned" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineSize="2" OutlineEnabled="True" ShadowOffsetX="0.0000" ShadowOffsetY="-2.0000" ShadowEnabled="True" ctype="TextObjectData">
                    <Size X="130.0000" Y="65.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="173.0000" Y="46.2000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="252" B="225" />
                    <PrePosition X="0.5000" Y="0.5500" />
                    <PreSize X="0.3757" Y="0.7738" />
                    <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                    <OutlineColor A="255" R="155" G="68" B="38" />
                    <ShadowColor A="255" R="155" G="68" B="38" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="250.0000" Y="594.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.9900" />
                <PreSize X="0.6920" Y="0.1400" />
                <FileData Type="PlistSubImage" Path="basics/popup/HeaderBlue.png" Plist="sprite-sheets/Basics.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_txtMessage" ActionTag="-68570432" Tag="1106" FrameEvent="RichText" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="37.5000" RightMargin="37.5000" TopMargin="60.0000" BottomMargin="240.0000" IsCustomSize="True" FontSize="40" LabelText="You're banned because you refund/cheat many times&#xA;Banned to dd/mm/yy" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="425.0000" Y="300.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                <Position X="250.0000" Y="540.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="87" G="60" B="38" />
                <PrePosition X="0.5000" Y="0.9000" />
                <PreSize X="0.8500" Y="0.5000" />
                <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="_nodeGifts" ActionTag="-58080079" Tag="852" IconVisible="True" PositionPercentXEnabled="True" LeftMargin="250.0000" RightMargin="250.0000" TopMargin="450.0000" BottomMargin="150.0000" ctype="SingleNodeObjectData">
                <Size X="0.0000" Y="0.0000" />
                <Children>
                  <AbstractNodeData Name="_imgGiftsBgr" ActionTag="1972456129" Alpha="84" Tag="851" IconVisible="False" LeftMargin="-210.7183" RightMargin="-210.7183" TopMargin="-90.3570" BottomMargin="-90.3570" Scale9Enable="True" LeftEage="21" RightEage="21" TopEage="21" BottomEage="21" Scale9OriginX="21" Scale9OriginY="21" Scale9Width="22" Scale9Height="22" ctype="ImageViewObjectData">
                    <Size X="421.4366" Y="180.7141" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="2" G="0" B="0" />
                    <PrePosition />
                    <PreSize X="0.0000" Y="0.0000" />
                    <FileData Type="PlistSubImage" Path="basics/shapes/RoundedRectangle_64px.png" Plist="sprite-sheets/Basics.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_gridViewGifts" ActionTag="-2058477430" Tag="270" FrameEvent="ck.GridViewVertical" IconVisible="False" LeftMargin="-210.7200" RightMargin="-210.7200" TopMargin="-90.3550" BottomMargin="-90.3550" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="421.4400" Y="180.7100" />
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
                <AnchorPoint />
                <Position X="250.0000" Y="150.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.2500" />
                <PreSize X="0.0000" Y="0.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutContact" ActionTag="504460922" Tag="157" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="39.2800" RightMargin="39.2800" TopMargin="359.6450" BottomMargin="59.6450" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="421.4400" Y="180.7100" />
                <Children>
                  <AbstractNodeData Name="_imgContact" ActionTag="-459294462" Tag="110" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="120.7200" RightMargin="120.7200" TopMargin="20.7100" BottomMargin="90.0000" TouchEnable="True" LeftEage="85" RightEage="85" TopEage="33" BottomEage="33" Scale9OriginX="41" Scale9OriginY="19" Scale9Width="44" Scale9Height="14" ctype="ImageViewObjectData">
                    <Size X="180.0000" Y="70.0000" />
                    <Children>
                      <AbstractNodeData Name="_txtContact" ActionTag="-646195642" UserData="KeepString" Tag="111" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="55.4960" RightMargin="11.5040" TopMargin="7.0000" BottomMargin="14.0000" IsCustomSize="True" FontSize="35" LabelText="FACEBOOK" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineSize="2" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="113.0000" Y="49.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="111.9960" Y="38.5000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.6222" Y="0.5500" />
                        <PreSize X="0.6278" Y="0.7000" />
                        <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                        <OutlineColor A="255" R="41" G="59" B="96" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_imgIconContact" ActionTag="-1804818840" Tag="112" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="15.5000" RightMargin="132.5000" TopMargin="15.5000" BottomMargin="22.5000" LeftEage="42" RightEage="42" TopEage="42" BottomEage="42" Scale9OriginX="42" Scale9OriginY="42" Scale9Width="44" Scale9Height="44" ctype="ImageViewObjectData">
                        <Size X="32.0000" Y="32.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="31.5000" Y="38.5000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.1750" Y="0.5500" />
                        <PreSize X="0.1778" Y="0.4571" />
                        <FileData Type="PlistSubImage" Path="icons/color/socials/Facebook.png" Plist="sprite-sheets/Nocis.plist" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="210.7200" Y="125.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.6917" />
                    <PreSize X="0.4271" Y="0.3874" />
                    <FileData Type="PlistSubImage" Path="buttons/rectangles/Blue.png" Plist="sprite-sheets/Buttons.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_txtID" ActionTag="546124939" UserData="EmptyString" Tag="125" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="77.5000" RightMargin="190.9400" TopMargin="111.2100" BottomMargin="30.5000" FontSize="35" LabelText="ID: 123456789" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="153.0000" Y="39.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="154.0000" Y="50.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="135" G="110" B="80" />
                    <PrePosition X="0.3654" Y="0.2767" />
                    <PreSize X="0.3630" Y="0.2158" />
                    <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                    <OutlineColor A="255" R="255" G="0" B="0" />
                    <ShadowColor A="255" R="110" G="110" B="110" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_imgCopy" ActionTag="1715185899" Tag="123" IconVisible="False" LeftMargin="246.1435" RightMargin="77.6835" TopMargin="109.2347" BottomMargin="28.5247" TouchEnable="True" LeftEage="85" RightEage="85" TopEage="33" BottomEage="33" Scale9OriginX="85" Scale9OriginY="33" Scale9Width="36" Scale9Height="15" ctype="ImageViewObjectData">
                    <Size X="97.6130" Y="42.9506" />
                    <Children>
                      <AbstractNodeData Name="_txtCopy" ActionTag="-621778281" Tag="124" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="27.3065" RightMargin="27.3065" TopMargin="6.3285" BottomMargin="8.6221" FontSize="25" LabelText="COPY" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineSize="2" ShadowOffsetX="0.0000" ShadowOffsetY="-2.0000" ShadowEnabled="True" ctype="TextObjectData">
                        <Size X="43.0000" Y="28.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="48.8065" Y="22.6221" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="120" G="58" B="0" />
                        <PrePosition X="0.5000" Y="0.5267" />
                        <PreSize X="0.4405" Y="0.6519" />
                        <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                        <OutlineColor A="255" R="158" G="82" B="9" />
                        <ShadowColor A="255" R="255" G="208" B="164" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="294.9500" Y="50.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.6999" Y="0.2767" />
                    <PreSize X="0.2316" Y="0.2377" />
                    <FileData Type="PlistSubImage" Path="buttons/rectangles/Yellow.png" Plist="sprite-sheets/Buttons.plist" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="250.0000" Y="150.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.2500" />
                <PreSize X="0.8429" Y="0.3012" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgClose" ActionTag="1739710898" Tag="1111" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="444.5000" RightMargin="-25.5000" TopMargin="-23.5000" BottomMargin="540.5000" LeftEage="26" RightEage="26" TopEage="33" BottomEage="33" Scale9OriginX="26" Scale9OriginY="33" Scale9Width="25" Scale9Height="14" ctype="ImageViewObjectData">
                <Size X="81.0000" Y="83.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="485.0000" Y="582.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.9700" Y="0.9700" />
                <PreSize X="0.1620" Y="0.1383" />
                <FileData Type="PlistSubImage" Path="buttons/rectangles/Close.png" Plist="sprite-sheets/Buttons.plist" />
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