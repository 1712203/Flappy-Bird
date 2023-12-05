<GameFile>
  <PropertyGroup Name="PaymentEventSuccessPopup" Type="Layer" ID="e3424bd4-7fe9-4f02-992d-d0f9f4f30314" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="100" Speed="1.0000" ActivedAnimationName="idle">
        <Timeline ActionTag="1266234066" Property="RotationSkew">
          <ScaleFrame FrameIndex="20" X="6.0000" Y="6.0028">
            <EasingData Type="3" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="-6.0000" Y="-5.9972">
            <EasingData Type="3" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="100" X="6.0000" Y="6.0028">
            <EasingData Type="2" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-1716919453" Property="RotationSkew">
          <ScaleFrame FrameIndex="20" X="-4.0000" Y="-4.0000">
            <EasingData Type="3" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="4.0000" Y="4.0000">
            <EasingData Type="3" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="100" X="-4.0000" Y="-4.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="1385490533" Property="VisibleForFrame">
          <BoolFrame FrameIndex="0" Tween="False" Value="True" />
          <BoolFrame FrameIndex="10" Tween="False" Value="False" />
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="haveBonus" StartIndex="0" EndIndex="0">
          <RenderColor A="255" R="100" G="149" B="237" />
        </AnimationInfo>
        <AnimationInfo Name="noBonus" StartIndex="10" EndIndex="10">
          <RenderColor A="255" R="255" G="228" B="196" />
        </AnimationInfo>
        <AnimationInfo Name="idle" StartIndex="20" EndIndex="100">
          <RenderColor A="255" R="255" G="165" B="0" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Layer" UserData="FullScreenPopup" Tag="1746" ctype="GameLayerObjectData">
        <Size X="640.0000" Y="1136.0000" />
        <Children>
          <AbstractNodeData Name="_root" ActionTag="-876509467" Tag="1758" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="640.0000" Y="1136.0000" />
            <Children>
              <AbstractNodeData Name="_popupPayment" ActionTag="-1976577786" Tag="1747" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" TopMargin="218.0000" BottomMargin="218.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="640.0000" Y="700.0000" />
                <Children>
                  <AbstractNodeData Name="_layoutFireworks" ActionTag="-1993663157" Tag="9924" IconVisible="False" RightMargin="340.0000" TopMargin="-58.0000" BottomMargin="458.0000" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="300.0000" Y="300.0000" />
                    <AnchorPoint />
                    <Position Y="458.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition Y="0.6543" />
                    <PreSize X="0.4688" Y="0.4286" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_imgBack" ActionTag="-1139326073" Tag="1748" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="0.5000" RightMargin="0.5000" TopMargin="-2.0000" BottomMargin="-2.0000" Scale9Enable="True" LeftEage="69" RightEage="69" TopEage="57" BottomEage="57" Scale9OriginX="69" Scale9OriginY="57" Scale9Width="501" Scale9Height="590" ctype="ImageViewObjectData">
                    <Size X="639.0000" Y="704.0000" />
                    <Children>
                      <AbstractNodeData Name="_imgDecor00" ActionTag="1266234066" Tag="9976" RotationSkewX="6.0000" RotationSkewY="6.0028" IconVisible="False" LeftMargin="191.9999" RightMargin="382.0001" TopMargin="184.0004" BottomMargin="373.9996" LeftEage="21" RightEage="21" TopEage="48" BottomEage="48" Scale9OriginX="21" Scale9OriginY="48" Scale9Width="23" Scale9Height="50" ctype="ImageViewObjectData">
                        <Size X="65.0000" Y="146.0000" />
                        <AnchorPoint ScaleX="0.4000" ScaleY="1.0000" />
                        <Position X="217.9999" Y="519.9996" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.3412" Y="0.7386" />
                        <PreSize X="0.1017" Y="0.2074" />
                        <FileData Type="PlistSubImage" Path="basics/other/MoonStarDecorate.png" Plist="sprite-sheets/Basics.plist" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_imgDecor01" ActionTag="-1716919453" Tag="9977" RotationSkewX="-4.0000" RotationSkewY="-4.0000" IconVisible="False" LeftMargin="137.0000" RightMargin="437.0000" TopMargin="326.0000" BottomMargin="232.0000" LeftEage="21" RightEage="21" TopEage="48" BottomEage="48" Scale9OriginX="21" Scale9OriginY="48" Scale9Width="23" Scale9Height="50" ctype="ImageViewObjectData">
                        <Size X="65.0000" Y="146.0000" />
                        <AnchorPoint ScaleX="0.4000" ScaleY="1.0000" />
                        <Position X="163.0000" Y="378.0000" />
                        <Scale ScaleX="-0.5000" ScaleY="0.5000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.2551" Y="0.5369" />
                        <PreSize X="0.1017" Y="0.2074" />
                        <FileData Type="PlistSubImage" Path="basics/other/MoonStarDecorate.png" Plist="sprite-sheets/Basics.plist" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="320.0000" Y="350.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="0.9984" Y="1.0057" />
                    <FileData Type="PlistSubImage" Path="basics/popup/PopupReward_02.png" Plist="sprite-sheets/Basics.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_layoutContent" ActionTag="-1241705362" Tag="9535" IconVisible="False" LeftMargin="256.0000" RightMargin="28.0000" TopMargin="58.0000" BottomMargin="127.0000" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="356.0000" Y="515.0000" />
                    <Children>
                      <AbstractNodeData Name="_imgHeader" ActionTag="535289758" Tag="1750" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="5.0000" RightMargin="5.0000" TopMargin="-33.0000" BottomMargin="482.0000" LeftEage="114" RightEage="114" TopEage="27" BottomEage="27" Scale9OriginX="114" Scale9OriginY="27" Scale9Width="118" Scale9Height="12" ctype="ImageViewObjectData">
                        <Size X="346.0000" Y="66.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="178.0000" Y="515.0000" />
                        <Scale ScaleX="0.8000" ScaleY="0.8000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="1.0000" />
                        <PreSize X="0.9719" Y="0.1282" />
                        <FileData Type="PlistSubImage" Path="texts/other/Congraz.png" Plist="sprite-sheets/Text_EN.plist" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_txtMessage" ActionTag="323582853" UserData="fitSingleLine, uppercase" Tag="9538" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="10.6800" RightMargin="10.6800" TopMargin="41.2000" BottomMargin="339.9000" IsCustomSize="True" FontSize="40" LabelText="PAYMENT SUCCESS" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="334.6400" Y="133.9000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="178.0000" Y="406.8500" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="173" G="95" B="146" />
                        <PrePosition X="0.5000" Y="0.7900" />
                        <PreSize X="0.9400" Y="0.2600" />
                        <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_txtHint" ActionTag="879632376" UserData="uppercase" Tag="1752" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="113.5000" RightMargin="113.5000" TopMargin="190.5500" BottomMargin="291.4500" FontSize="30" LabelText="YOU RECEIVED" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="129.0000" Y="33.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                        <Position X="178.0000" Y="324.4500" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="173" G="95" B="146" />
                        <PrePosition X="0.5000" Y="0.6300" />
                        <PreSize X="0.3624" Y="0.0641" />
                        <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_layoutBonusGifts" ActionTag="-132419729" Tag="1826" IconVisible="False" PositionPercentXEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" VerticalEdge="BottomEdge" TopMargin="347.0000" BottomMargin="53.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                        <Size X="356.0000" Y="115.0000" />
                        <Children>
                          <AbstractNodeData Name="_gridItems" ActionTag="1385490533" Tag="1754" FrameEvent="ck.GridViewVertical" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="23.0000" RightMargin="23.0001" TopMargin="-80.5526" BottomMargin="3.4483" ClipAble="False" BackColorAlpha="102" ComboBoxIndex="1" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                            <Size X="310.0000" Y="192.1043" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                            <Position X="178.0000" Y="99.5004" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.5000" Y="0.8652" />
                            <PreSize X="0.8708" Y="1.6705" />
                            <SingleColor A="255" R="150" G="200" B="255" />
                            <FirstColor A="255" R="150" G="200" B="255" />
                            <EndColor A="255" R="255" G="255" B="255" />
                            <ColorVector ScaleY="1.0000" />
                          </AbstractNodeData>
                        </Children>
                        <AnchorPoint ScaleX="0.5000" />
                        <Position X="178.0000" Y="53.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.1029" />
                        <PreSize X="1.0000" Y="0.2233" />
                        <SingleColor A="255" R="150" G="200" B="255" />
                        <FirstColor A="255" R="150" G="200" B="255" />
                        <EndColor A="255" R="255" G="255" B="255" />
                        <ColorVector ScaleY="1.0000" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_imgOk" ActionTag="1577112955" Tag="1755" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="75.0000" RightMargin="75.0000" TopMargin="471.5000" BottomMargin="-37.5000" TouchEnable="True" LeftEage="85" RightEage="85" TopEage="33" BottomEage="33" Scale9OriginX="85" Scale9OriginY="33" Scale9Width="36" Scale9Height="15" ctype="ImageViewObjectData">
                        <Size X="206.0000" Y="81.0000" />
                        <Children>
                          <AbstractNodeData Name="_txtOk" ActionTag="-242901289" Tag="1756" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="84.5000" RightMargin="84.5000" TopMargin="11.9500" BottomMargin="20.0500" FontSize="40" LabelText="Ok" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineSize="2" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                            <Size X="37.0000" Y="49.0000" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                            <Position X="103.0000" Y="44.5500" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.5000" Y="0.5500" />
                            <PreSize X="0.1796" Y="0.6049" />
                            <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                            <OutlineColor A="255" R="9" G="63" B="31" />
                            <ShadowColor A="255" R="110" G="110" B="110" />
                          </AbstractNodeData>
                        </Children>
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="178.0000" Y="3.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.0058" />
                        <PreSize X="0.5787" Y="0.1573" />
                        <FileData Type="PlistSubImage" Path="buttons/rectangles/Green.png" Plist="sprite-sheets/Buttons.plist" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                    <Position X="434.0000" Y="642.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.6781" Y="0.9171" />
                    <PreSize X="0.5562" Y="0.7357" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="568.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.0000" Y="0.6162" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="320.0000" Y="568.0000" />
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
      </ObjectData>
    </Content>
  </Content>
</GameFile>