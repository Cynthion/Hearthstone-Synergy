import APP_CONFIG from '../../app.config';
import { Card } from '../../hearthstone';

export class Node implements d3.SimulationNodeDatum {
    
    // optional - defining optional implementation properties - required for relevant typing assistance
    index?: number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number | null;
    fy?: number | null;

    id: string;
    linkCount: number = 0;
  
    constructor(id, card?: Card) {
      this.id = id;
    }
  
    normal = () => {
      return Math.sqrt(this.linkCount / 100);
    }
  
    get r() {
      return 50 * this.normal() + 10;
    }
  
    get fontSize() {
      return (30 * this.normal() + 10) + 'px';
    }
  
    get color() {
      let index = Math.floor(APP_CONFIG.SPECTRUM.length * this.normal());
      return APP_CONFIG.SPECTRUM[index];
    }
}