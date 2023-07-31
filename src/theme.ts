type Colors = PRIMARY_COLORS | SECONDARY_COLORS | MISC_COLORS;

type ColorsType = Record<Colors, string>;

interface Theme {
  colors: ColorsType;
}

export enum PRIMARY_COLORS {
  PRIMARY = 'primary'
}

export enum SECONDARY_COLORS {
  SECONDARY = 'secondary'
}

export enum MISC_COLORS {
  OFF_WHITE = 'offWhite',
  GREEN_BLUE = 'greenBlue',
  GREY = 'grey'
}

export const theme: Theme = {
  colors: {
    [PRIMARY_COLORS.PRIMARY]: '#9674d4',
    [SECONDARY_COLORS.SECONDARY]: '#101356',
    [MISC_COLORS.OFF_WHITE]: '#fbfdf6',
    [MISC_COLORS.GREEN_BLUE]: '#81ffff',
    [MISC_COLORS.GREY]: '#e8e8e8'
  }
};
