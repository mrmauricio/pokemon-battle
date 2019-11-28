import { Sprites, Move, Stats } from "./pokemon";

export class Text {
    id: number;
    name: string;
}

export class Colors {
    red: string;
    green: string;
    yellow: string;
}

export class Fighter {
    id: number;
    sprites: Sprites;
    name: string;
    types: string[];
    moves: Move[];
    stats: Stats;
    status: BattleStatus;
}

export class BattleStatus {
    startAttack: boolean;
    currentAttackEffectiveness: string;
    damageDealt: number;
    currentHp: number;
    currentHpPercentage: number;
    currentHpColor: string;
    isAlive: boolean;
}
