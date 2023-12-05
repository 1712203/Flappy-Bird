<GameFile>
  <PropertyGroup Name="ChatHistoryWidget.js" Type="Node" ID="2d34ae9c-9ddb-412a-8e99-f07c81d1dd60" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000" />
      <ObjectData Name="Node" Tag="22983" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_chatHistoryWidget" ActionTag="-1687575064" Tag="4204" FrameEvent="ChatHistoryWidget" IconVisible="False" LeftMargin="-100.0000" RightMargin="-100.0000" TopMargin="-100.0000" BottomMargin="-100.0000" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="200.0000" Y="200.0000" />
            <Children>
              <AbstractNodeData Name="_layoutBackgroundChatHistoryWidget" ActionTag="-1639548659" Tag="4205" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="200.0000" Y="200.0000" />
                <Children>
                  <AbstractNodeData Name="_imgBackground01ChatHistoryWidget" ActionTag="1675642782" Alpha="102" Tag="4206" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" Scale9Enable="True" LeftEage="21" RightEage="21" TopEage="21" BottomEage="21" Scale9OriginX="21" Scale9OriginY="21" Scale9Width="22" Scale9Height="22" ctype="ImageViewObjectData">
                    <Size X="200.0000" Y="200.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="100.0000" Y="100.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="0" G="0" B="0" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="1.0000" Y="1.0000" />
                    <FileData Type="PlistSubImage" Path="basics/shapes/RoundedRectangle_64px_5px.png" Plist="sprite-sheets/Basics.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_imgBackground02ChatHistoryWidget" ActionTag="-116982968" Tag="4207" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="-1.0000" RightMargin="-1.0000" TopMargin="-1.0000" BottomMargin="-1.0000" Scale9Enable="True" LeftEage="21" RightEage="21" TopEage="21" BottomEage="21" Scale9OriginX="21" Scale9OriginY="21" Scale9Width="24" Scale9Height="24" ctype="ImageViewObjectData">
                    <Size X="202.0000" Y="202.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="100.0000" Y="100.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="170" G="169" B="53" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="1.0100" Y="1.0100" />
                    <FileData Type="PlistSubImage" Path="basics/shapes/StrokeRoundedRectangle_64px_5px.png" Plist="sprite-sheets/Basics.plist" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="100.0000" Y="100.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.0000" Y="1.0000" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_scrollViewChatMessages" ActionTag="-1852235765" Tag="4208" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ScrollDirectionType="Vertical" ctype="ScrollViewObjectData">
                <Size X="200.0000" Y="200.0000" />
                <Children>
                  <AbstractNodeData Name="_layoutChatMessages" ActionTag="1540138725" Tag="4209" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="200.0000" Y="200.0000" />
                    <Children>
                      <AbstractNodeData Name="_txtChatMessages" ActionTag="-575197959" ZOrder="1" Tag="4210" FrameEvent="RichText" IconVisible="False" PositionPercentXEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" LeftMargin="10.0000" RightMargin="10.0000" TopMargin="10.0000" BottomMargin="10.0000" IsCustomSize="True" FontSize="22" LabelText="Enter here" VerticalAlignmentType="VT_Bottom" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="180.0000" Y="180.0000" />
                        <AnchorPoint ScaleX="0.5000" />
                        <Position X="100.0000" Y="10.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.0500" />
                        <PreSize X="0.9000" Y="0.9000" />
                        <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
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
                </Children>
                <AnchorPoint />
                <Position />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="1.0000" Y="1.0000" />
                <SingleColor A="255" R="255" G="150" B="100" />
                <FirstColor A="255" R="255" G="150" B="100" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
                <InnerNodeSize Width="200" Height="200" />
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