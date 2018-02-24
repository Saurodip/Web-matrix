angular.module("Application").service("progressBarService", function(){            
    this.amountLoaded = 1;
    this.start = 4.72;
    this.diff = 0;
    this.marginTopInnerText = 10;
    
    this.circularProgressBar = function(styleObj)
    {
        this.canvasReference = document.getElementById(styleObj.canvasId);
        this.context = this.canvasReference.getContext('2d');
        this.width = this.canvasReference.width/2;
        this.height = this.canvasReference.height/2;
        
        this.diff = (this.amountLoaded/100) * Math.PI * 2;
        this.context.clearRect(0, 0, 400, 200);
        this.context.beginPath();
        this.context.arc(this.width, this.height, styleObj.radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = styleObj.textFillStyle;
        this.context.fill();
        this.context.strokeStyle = styleObj.strokePathStyle;
        this.context.stroke();
        this.context.fillStyle = styleObj.textColor;
        this.context.strokeStyle = styleObj.outlineStrokeStyle;
        this.context.textAlign = 'center';
        this.context.lineWidth = 12;
        this.context.font = '22pt Verdana';
        this.context.beginPath();
        this.context.arc(this.width, this.height, styleObj.radius, this.start, this.diff + this.start, false);
        this.context.stroke();
        this.context.fillText(this.amountLoaded + '%', this.width, this.height + this.marginTopInnerText);          

        return this.amountLoaded++;
    }
});