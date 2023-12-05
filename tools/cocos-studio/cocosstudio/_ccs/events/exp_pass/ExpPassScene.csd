<GameFile>
  <PropertyGroup Name="ExpPassScene" Type="Scene" ID="b0d8de20-546b-4ca9-87b0-0f3ceb51e94c" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000" />
      <ObjectData Name="Scene" Tag="62" ctype="GameNodeObjectData">
        <Size X="640.0000" Y="1136.0000" />
        <Children>
          <AbstractNodeData Name="imgFullBgr" ActionTag="771232117" Tag="118" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TopMargin="-1.9880" BottomMargin="-1.9880" TouchEnable="True" LeftEage="211" RightEage="211" TopEage="375" BottomEage="375" Scale9OriginX="211" Scale9OriginY="375" Scale9Width="218" Scale9Height="390" ctype="ImageViewObjectData">
            <Size X="640.0000" Y="1139.9760" />
            <Children>
              <AbstractNodeData Name="imgTimerBackground" ActionTag="1418246232" Tag="142" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="231.5000" RightMargin="231.5000" TopMargin="24.1743" BottomMargin="996.8016" LeftEage="36" RightEage="36" TopEage="8" BottomEage="8" Scale9OriginX="36" Scale9OriginY="8" Scale9Width="105" Scale9Height="103" ctype="ImageViewObjectData">
                <Size X="177.0000" Y="119.0000" />
                <Children>
                  <AbstractNodeData Name="imgClock" ActionTag="839797522" Tag="4797" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="67.5045" RightMargin="64.4955" TopMargin="9.4261" BottomMargin="56.5739" LeftEage="15" RightEage="15" TopEage="18" BottomEage="18" Scale9OriginX="15" Scale9OriginY="18" Scale9Width="15" Scale9Height="17" ctype="ImageViewObjectData">
                    <Size X="45.0000" Y="53.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="90.0045" Y="83.0739" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5085" Y="0.6981" />
                    <PreSize X="0.2542" Y="0.4454" />
                    <FileData Type="PlistSubImage" Path="continuous-purchase_clock.png" Plist="sprite-sheets/ContinuousPurchase.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_txtTimeLeft" ActionTag="234160429" Tag="143" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="10.8901" RightMargin="10.8901" TopMargin="67.8349" BottomMargin="16.1651" IsCustomSize="True" FontSize="27" LabelText="48:00:00" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="155.2198" Y="35.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="88.5000" Y="33.6651" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.2829" />
                    <PreSize X="0.8769" Y="0.2941" />
                    <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                    <OutlineColor A="255" R="104" G="104" B="205" />
                    <ShadowColor A="255" R="110" G="110" B="110" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="1056.3016" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.9266" />
                <PreSize X="0.2766" Y="0.1044" />
                <FileData Type="PlistSubImage" Path="e12_timeline_bar.png" Plist="sprite-sheets/exp_pass.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="btnTutorial" ActionTag="-913743227" Tag="60" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="21.5320" RightMargin="557.4680" TopMargin="41.8185" BottomMargin="1038.1575" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="31" Scale9Height="38" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                <Size X="61.0000" Y="60.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="52.0320" Y="1068.1575" />
                <Scale ScaleX="0.9000" ScaleY="0.9000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.0813" Y="0.9370" />
                <PreSize X="0.0953" Y="0.0526" />
                <TextColor A="255" R="65" G="65" B="70" />
                <DisabledFileData Type="PlistSubImage" Path="e12_btn_help.png" Plist="sprite-sheets/exp_pass.plist" />
                <PressedFileData Type="PlistSubImage" Path="e12_btn_help.png" Plist="sprite-sheets/exp_pass.plist" />
                <NormalFileData Type="PlistSubImage" Path="e12_btn_help.png" Plist="sprite-sheets/exp_pass.plist" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="imgStarBG" ActionTag="-1119529142" Tag="93" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" RightMargin="320.0000" TopMargin="448.4666" BottomMargin="144.3210" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="320.0000" Y="547.1884" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="160.0000" Y="417.9152" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.2500" Y="0.3666" />
                <PreSize X="0.5000" Y="0.4800" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="scrollView" ActionTag="-916688206" Tag="5431" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TopMargin="437.4088" BottomMargin="137.5951" TouchEnable="True" ClipAble="True" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" IsBounceEnabled="True" ScrollDirectionType="Vertical" ctype="ScrollViewObjectData">
                <Size X="640.0000" Y="564.9720" />
                <Children>
                  <AbstractNodeData Name="imgProgressBgr" ActionTag="700939528" Tag="5405" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="295.5000" RightMargin="295.5000" BottomMargin="-6.0000" Scale9Enable="True" LeftEage="16" RightEage="16" TopEage="16" BottomEage="16" Scale9OriginX="16" Scale9OriginY="16" Scale9Width="17" Scale9Height="541" ctype="ImageViewObjectData">
                    <Size X="49.0000" Y="573.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                    <Position X="320.0000" Y="567.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="1.0000" />
                    <PreSize X="0.0766" Y="1.0106" />
                    <FileData Type="PlistSubImage" Path="e12_Energy_bar.png" Plist="sprite-sheets/exp_pass.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="LoadingBar" ActionTag="-488671888" Tag="5451" RotationSkewX="90.0000" RotationSkewY="90.0000" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="320.0000" RightMargin="-238.0000" TopMargin="1.4843" BottomMargin="542.5157" ProgressInfo="100" ctype="LoadingBarObjectData">
                    <Size X="558.0000" Y="23.0000" />
                    <AnchorPoint ScaleY="0.5000" />
                    <Position X="320.0000" Y="554.0157" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.9771" />
                    <PreSize X="0.8719" Y="0.0406" />
                    <ImageFileData Type="PlistSubImage" Path="e12_Energy.png" Plist="sprite-sheets/exp_pass.plist" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                <Position X="320.0000" Y="702.5671" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.6163" />
                <PreSize X="1.0000" Y="0.4956" />
                <SingleColor A="255" R="255" G="150" B="100" />
                <FirstColor A="255" R="255" G="150" B="100" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
                <InnerNodeSize Width="640" Height="567" />
              </AbstractNodeData>
              <AbstractNodeData Name="imgBg2" ActionTag="1413844542" Tag="5400" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TopMargin="187.3551" BottomMargin="117.5885" LeftEage="211" RightEage="211" TopEage="275" BottomEage="275" Scale9OriginX="211" Scale9OriginY="275" Scale9Width="218" Scale9Height="285" ctype="ImageViewObjectData">
                <Size X="640.0000" Y="835.0324" />
                <Children>
                  <AbstractNodeData Name="imgTicketNormal" ActionTag="-733402881" Tag="131" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="398.7680" RightMargin="77.2320" TopMargin="105.3079" BottomMargin="637.7245" LeftEage="32" RightEage="32" TopEage="21" BottomEage="21" Scale9OriginX="32" Scale9OriginY="21" Scale9Width="100" Scale9Height="50" ctype="ImageViewObjectData">
                    <Size X="164.0000" Y="92.0000" />
                    <Children>
                      <AbstractNodeData Name="txtFree" ActionTag="753198414" Tag="126" RotationSkewX="8.0000" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="-44.7685" RightMargin="-44.7686" TopMargin="84.9997" BottomMargin="-34.9997" IsCustomSize="True" FontSize="35" LabelText="Free" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineEnabled="True" ShadowOffsetX="0.0000" ShadowOffsetY="-3.0000" ShadowEnabled="True" ctype="TextObjectData">
                        <Size X="253.5371" Y="42.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                        <Position X="82.0000" Y="7.0003" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.0761" />
                        <PreSize X="1.5460" Y="0.4565" />
                        <FontResource Type="Normal" Path="fonts/LilitaOneRegular.ttf" Plist="" />
                        <OutlineColor A="255" R="0" G="0" B="0" />
                        <ShadowColor A="255" R="58" G="50" B="112" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="480.7680" Y="683.7245" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.7512" Y="0.8188" />
                    <PreSize X="0.2562" Y="0.1102" />
                    <FileData Type="PlistSubImage" Path="e12_pass_free.png" Plist="sprite-sheets/exp_pass.plist" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="535.1047" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.4694" />
                <PreSize X="1.0000" Y="0.7325" />
                <FileData Type="PlistSubImage" Path="e12_bg2.png" Plist="sprite-sheets/exp_pass.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="layoutBuyTicket" ActionTag="13839118" Tag="228" IconVisible="False" PositionPercentXEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" TopMargin="1012.0859" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="640.0000" Y="127.8900" />
                <Children>
                  <AbstractNodeData Name="btnBuyTicket" ActionTag="-924670582" Tag="139" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="329.5040" RightMargin="110.4960" TopMargin="39.7293" BottomMargin="31.1607" TouchEnable="True" FontSize="14" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="210" Scale9Height="66" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                    <Size X="200.0000" Y="57.0000" />
                    <Children>
                      <AbstractNodeData Name="imgGem" ActionTag="385961585" Tag="75" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="6.5600" RightMargin="65.4400" TopMargin="-76.5856" BottomMargin="5.5856" LeftEage="22" RightEage="22" TopEage="19" BottomEage="19" Scale9OriginX="22" Scale9OriginY="19" Scale9Width="84" Scale9Height="90" ctype="ImageViewObjectData">
                        <Size X="128.0000" Y="128.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="70.5600" Y="69.5856" />
                        <Scale ScaleX="0.3000" ScaleY="0.3000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.3528" Y="1.2208" />
                        <PreSize X="0.6400" Y="2.2456" />
                        <FileData Type="PlistSubImage" Path="icons/color/gems/Gem.png" Plist="sprite-sheets/Nocis.plist" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="txtPriceTicket" ActionTag="-1777252529" Tag="76" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="13.1913" RightMargin="13.1913" TopMargin="4.9945" BottomMargin="12.0055" IsCustomSize="True" FontSize="27" LabelText="Unlock Pass" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="0.0000" ShadowOffsetY="-2.0000" ShadowEnabled="True" ctype="TextObjectData">
                        <Size X="173.6174" Y="40.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="100.0000" Y="32.0055" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5615" />
                        <PreSize X="0.8681" Y="0.7018" />
                        <FontResource Type="Normal" Path="fonts/LilitaOneRegular.ttf" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="0" G="128" B="0" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="txtPriceReset" ActionTag="-97837357" Tag="140" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="90.1200" RightMargin="17.1965" TopMargin="-24.2949" BottomMargin="57.2949" IsCustomSize="True" FontSize="25" LabelText="500" VerticalAlignmentType="VT_Center" ShadowOffsetX="0.0000" ShadowOffsetY="-2.0000" ShadowEnabled="True" ctype="TextObjectData">
                        <Size X="92.6835" Y="24.0000" />
                        <AnchorPoint ScaleY="0.5000" />
                        <Position X="90.1200" Y="69.2949" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.4506" Y="1.2157" />
                        <PreSize X="0.4634" Y="0.4211" />
                        <FontResource Type="Normal" Path="fonts/LilitaOneRegular.ttf" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="0" G="0" B="255" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="429.5040" Y="59.6607" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.6711" Y="0.4665" />
                    <PreSize X="0.3125" Y="0.4457" />
                    <TextColor A="255" R="65" G="65" B="70" />
                    <DisabledFileData Type="PlistSubImage" Path="buttons/rectangles/02_Green.png" Plist="sprite-sheets/Buttons.plist" />
                    <PressedFileData Type="PlistSubImage" Path="buttons/rectangles/02_Green.png" Plist="sprite-sheets/Buttons.plist" />
                    <NormalFileData Type="PlistSubImage" Path="buttons/rectangles/02_Green.png" Plist="sprite-sheets/Buttons.plist" />
                    <OutlineColor A="255" R="255" G="0" B="0" />
                    <ShadowColor A="255" R="110" G="110" B="110" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="btnPlay" ActionTag="-2100757443" Tag="242" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="111.2000" RightMargin="328.8000" TopMargin="39.7293" BottomMargin="31.1607" TouchEnable="True" FontSize="14" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="212" Scale9Height="66" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                    <Size X="200.0000" Y="57.0000" />
                    <Children>
                      <AbstractNodeData Name="txtPlay" ActionTag="-898976387" Tag="243" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="12.5318" RightMargin="12.5318" TopMargin="4.9945" BottomMargin="12.0055" IsCustomSize="True" FontSize="27" LabelText="Play Now" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="0.0000" ShadowOffsetY="-2.0000" ShadowEnabled="True" ctype="TextObjectData">
                        <Size X="174.9364" Y="40.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="100.0000" Y="32.0055" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5615" />
                        <PreSize X="0.8747" Y="0.7018" />
                        <FontResource Type="Normal" Path="fonts/LilitaOneRegular.ttf" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="0" G="128" B="0" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="211.2000" Y="59.6607" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.3300" Y="0.4665" />
                    <PreSize X="0.3125" Y="0.4457" />
                    <TextColor A="255" R="65" G="65" B="70" />
                    <DisabledFileData Type="PlistSubImage" Path="buttons/rectangles/02_Blue.png" Plist="sprite-sheets/Buttons.plist" />
                    <PressedFileData Type="PlistSubImage" Path="buttons/rectangles/02_Blue.png" Plist="sprite-sheets/Buttons.plist" />
                    <NormalFileData Type="PlistSubImage" Path="buttons/rectangles/02_Blue.png" Plist="sprite-sheets/Buttons.plist" />
                    <OutlineColor A="255" R="255" G="0" B="0" />
                    <ShadowColor A="255" R="110" G="110" B="110" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="btnClose" ActionTag="-197095421" Tag="244" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" LeftMargin="15.7760" RightMargin="562.2080" TopMargin="38.2293" BottomMargin="29.6607" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="32" Scale9Height="38" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                    <Size X="62.0160" Y="60.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="46.7840" Y="59.6607" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.0731" Y="0.4665" />
                    <PreSize X="0.0969" Y="0.4692" />
                    <TextColor A="255" R="65" G="65" B="70" />
                    <DisabledFileData Type="PlistSubImage" Path="e12_btn_exit.png" Plist="sprite-sheets/exp_pass.plist" />
                    <PressedFileData Type="PlistSubImage" Path="e12_btn_exit.png" Plist="sprite-sheets/exp_pass.plist" />
                    <NormalFileData Type="PlistSubImage" Path="e12_btn_exit.png" Plist="sprite-sheets/exp_pass.plist" />
                    <OutlineColor A="255" R="255" G="0" B="0" />
                    <ShadowColor A="255" R="110" G="110" B="110" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" />
                <Position X="320.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" />
                <PreSize X="1.0000" Y="0.1122" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_itemInfoBubbleWidget" ActionTag="288693727" VisibleForFrame="False" Tag="381" FrameEvent="ItemInfoBubbleWidget" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="294.4000" RightMargin="345.6000" TopMargin="731.9786" BottomMargin="407.9974" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                <Size X="0.0000" Y="0.0000" />
                <AnchorPoint />
                <Position X="294.4000" Y="407.9974" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.4600" Y="0.3579" />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="Normal" Path="_ccs/ui/ItemInfoBubbleWidget.csd" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgInventory" ActionTag="-340601524" Tag="1446" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="546.1713" RightMargin="20.8287" TopMargin="1043.6272" BottomMargin="27.3487" LeftEage="24" RightEage="24" TopEage="24" BottomEage="24" Scale9OriginX="24" Scale9OriginY="24" Scale9Width="25" Scale9Height="21" ctype="ImageViewObjectData">
                <Size X="73.0000" Y="69.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="582.6713" Y="61.8487" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.9104" Y="0.0543" />
                <PreSize X="0.1141" Y="0.0605" />
                <FileData Type="PlistSubImage" Path="icons/color/basic/Inventory.png" Plist="sprite-sheets/Nocis.plist" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="320.0000" Y="568.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5000" />
            <PreSize X="1.0000" Y="1.0035" />
            <FileData Type="PlistSubImage" Path="e12_bg1.png" Plist="sprite-sheets/exp_pass.plist" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>