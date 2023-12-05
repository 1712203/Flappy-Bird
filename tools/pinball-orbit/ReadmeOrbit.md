# Đây là tool sinh orbit cho banh trong minigames Pinball

## Output
- `./output/PinballOrbitConfig.json` File orbit dạng json
```jsdoc
{
  <forceId> : {
    "_points": Array(2)[],
    "_collisionIndices": number[]
  }    
}
```  
- `res/configs/PinballOrbitConfig.bing` File orbit dạng binary để giảm dung lượng

## Input
- `./libs/*` Tool dùng lib vật lý `Matter.js` và lib tải file `FileSaver.js`
- `res/_ccs/pinball/PinballTable.json` map config từ cocostudio, data chính là node _layoutPhysics
- `./images/wall.svg` File svg định nghĩa wall ngoài cùng
- `./Event20WallVertices.json` File các điểm convert từ file svg, sinh file này khi đổi `wall.svg`, không cần chạy lại mỗi khi sinh orbit
- `./index.js` và `./index.html` Dùng để chạy test vật lý trên trình duyệt một cách trực quan, và dùng để sinh file WallVertices
- `./generate-orbit.js` Script sinh orbit output, chứa các config để tùy chỉnh
    - Vật lý: Độ nảy của banh, trọng lực
    - Orbit: 
        - Độ dài (số điểm) tối đa, tối thiểu của orbit
        - Số orbit tối đa, tối thiểu đến ô đích với lực v
        - Số lần chạy giả lập tối đa với lực v, cho dù chưa đủ số orbit thỏa mãn cũng dừng
        - Số mức lực cần sinh


## Steps
1. Config map trong cocostudio: Điều chỉnh các thứ trong `PinballTable.csd//_layoutPhysic`, Ctrl+P để export
2. Chỉnh lại file `./images/wall.svg` nếu cần
3. Mở file `./index.html` trên trình duyệt với server local, check lại các body xem có đúng design chưa
4. Nhận nút `Download` để tải file `Event20WallVertices.json` để update wall vertices nếu có thay đổi
5. Bấm nút `Run Test` trên Browser để test, hoặc chạy `run.cmd` để sinh orbit 