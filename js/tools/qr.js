if (!com)
	var com = {};
if (!com.logicpartners)
	com.logicpartners = {};
if (!com.logicpartners.designerTools)
    com.logicpartners.designerTools = {};
    
    com.logicpartners.designerTools.qr = function() {
        var self = this;
        this.counter = 1;
        this.button = $("<div></div>").addClass("designerToolbarQR designerToolbarButton").attr("title", "QR").append($("<div></div>"));
        this.object = function(x, y, width, height) {
            var width = 100;
            var canvasHolder = $("<canvas></canvas>").prop("width", "100").prop("height", "1");
            this.name = "QR " + self.counter++;
            this.text = "QR";
            this.x = x;
            this.y = y;
            //this.width = width;
            this.height = height;
            
            this.getZPLData = function() {
                return "";
            }
    
            this.toZPL = function(labelx, labely, labelwidth, labelheight) {
                return "XA^FO100,100^BQN,2,10^FDMM,AAC-45^FS^XS";
            }
    
            this.draw = function(context) {
                var ctx = canvasHolder[0].getContext('2d');
                //canvasHolder.QRCode("labelDesigner", { text : this.text, width: 1, height : 1});
                $("#imgQR").html(" ");
                var imgQR = new QRCode("imgQR", {
                        text : "http://naver.com",
                        width : 90,
                        height : 90
                });
                var image = new Image();
                image.onload = function() {
                    ctx.drawImage(image, 0, 0);
                  };
                image.src = imgQR._el.lastChild.src;
            }
            
            this.setWidth = function(width) {
                //this.width = width;
            }
            
            this.getWidth = function() {
                return width;
            }
            
            this.setHeight = function(height) {
                this.height = height;
            }
            
            this.getHeight = function() {
                return this.height;
            }
    
            this.setHandle = function(coords) {
                this.handle = this.resizeZone(coords);
            }
    
            this.getHandle = function() {
                return this.handle;
            }
    
            this.drawActive = function(context) {
                context.dashedStroke(parseInt(this.x + 1), parseInt(this.y + 1), parseInt(this.x) + parseInt(width) - 1, parseInt(this.y) + parseInt(this.height) - 1, [2, 2]);
            }
    
            this.hitTest = function(coords) {
                return (coords.x >= parseInt(this.x) && coords.x <= parseInt(this.x) + parseInt(width) && coords.y >= parseInt(this.y) && coords.y <= parseInt(this.y) + parseInt(this.height));
            }
        }
    };