type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function rounded(value: number): number {
  return Math.floor(value * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('side must be greater than 0');
    }

    if (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)) {
      throw new Error(
        'the longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return rounded(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    this.radius = radius;
    this.color = color;

    if (radius <= 0) {
      throw new Error('radius must be greater than 0');
    }
  }

  getArea(): number {
    return rounded(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  width: number;

  height: number;

  color: Color;

  constructor(color: Color, width: number, height: number) {
    this.width = width;
    this.height = height;
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('side must be greater than 0');
    }
  }

  getArea(): number {
    return rounded(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return 'A ' + figure.color + ' ' + figure.shape + ' - ' + figure.getArea();
}
