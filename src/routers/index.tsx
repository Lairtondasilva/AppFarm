import {
  NavigationContainer,
  ParamListBase,
  NavigationContainerRef,
} from "@react-navigation/native";
import { MyStack } from "./stack.routes";
import React from "react";
import NavigationContext from "../context/NavigationContext";

export function Routes() {
  const navigationRef =
    React.useRef<NavigationContainerRef<ParamListBase>>(null);

  function navigate(routeName: string, params?: object) {
    navigationRef.current?.navigate(routeName, params);
  }
  return (
    <NavigationContext.Provider value={navigate}>
      <NavigationContainer ref={navigationRef}>
        <MyStack />
      </NavigationContainer>
    </NavigationContext.Provider>
  );
}
