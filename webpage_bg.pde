int h1 = 120, s1 = 0, b1 = 100,
      h2 = 120, s2 = 100, b2 = 80;
int mode = 1;

void setup() {
  noStroke();
  colorMode(HSB, 360, 100, 100);
  size(1000, 500);
  frameRate(5);
}

void draw() {
  float coef = 3;
  float rectHeight = ceil( coef * (float)height / (float)98 );
  h2 = (h2 + 1) % 360;
  h1 = h2;
  for(int i = 0; i < height / coef; i++) {
    float nextPos = 0;
    int totalRec = i+3;
    float totalF = (float)(totalRec-1);
    float rectWidth = (float)width / (float)totalRec;
    float adjustedWidth = rectWidth+1;
    for(int j = 0; j < totalRec; j ++) {
      float curr = (float)j / totalF;
      float cH = curr * h1 + (1 - curr) * h2;
      float cS = curr * s1 + (1 - curr) * s2;
      float cB = curr * b1 + (1 - curr) * b2;
      fill(cH, cS, cB, 255);
      rect(nextPos, i * rectHeight, adjustedWidth, rectHeight);
      nextPos += rectWidth;
    }
  }
}
