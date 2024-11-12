import React from 'react';
import { Tabs } from 'expo-router';
import { CustomTabBar } from '../../enteties/card/widgets/TabBar';

export default function CatalogLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="catalog"
        options={{
          title: 'Главная',
          tabBarLabel: 'Главная',
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: 'Заказ',
          tabBarLabel: 'Заказ',
        }}
      />
    </Tabs>
  );
}
