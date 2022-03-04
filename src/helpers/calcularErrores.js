

export const errorAbsoluto = ( valorTeorico = 0, valorExperimental = 0 ) => {
   let resultado = valorTeorico - valorExperimental;

   return (resultado < 0) ? resultado * -1 : resultado;
};
export const errorRelativo = ( valorTeorico = 0, valorExperimental = 0 ) => {
    let resultado = (valorTeorico - valorExperimental) / valorTeorico;

    return (resultado < 0) ? resultado * -1 : resultado;
};
export const errorPorcentual = ( valorRelativo ) => (valorRelativo * 100);

