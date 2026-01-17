'use client';

import { createContext, ReactNode, useContext } from 'react';

function createGenericContext<State, Controller>() {
  const StateContext = createContext<State | null>(null);
  const ControllerContext = createContext<Controller | null>(null);

  function Provider({
    state,
    controller,
    children,
  }: {
    state: State;
    controller: Controller;
    children: ReactNode;
  }) {
    return (
      <ControllerContext.Provider value={controller}>
        <StateContext.Provider value={state}>{children}</StateContext.Provider>
      </ControllerContext.Provider>
    );
  }

  function useStateContext() {
    const context = useContext(StateContext);
    if (!context) throw new Error('useState must be used within Provider');
    return context;
  }

  function useControllerContext() {
    const context = useContext(ControllerContext);
    if (!context) throw new Error('useController must be used within Provider');
    return context;
  }

  return { Provider, useStateContext, useControllerContext };
}

export default createGenericContext;
