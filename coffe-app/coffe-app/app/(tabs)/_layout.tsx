import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Сatalog',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color}
          href = '/catalog' />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color}
          href = '/cart' />,
        }}
      />
    </Tabs>
  );
}
