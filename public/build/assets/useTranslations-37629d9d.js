function r(n,o={}){let t=window._translations[n]||n;return Object.keys(o).forEach(a=>{t=t.replace(`:${a}`,o[a])}),t}export{r as _};
