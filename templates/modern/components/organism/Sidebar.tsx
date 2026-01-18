"use client";

import { useState } from "react";
import { UserProfile } from "../molecules/UserProfile";
import { NavItem } from "../molecules/NavItem";
import { SubNavItem } from "../molecules/SubNavItem";
import { Text } from "../atoms/Text";
import { DotIndicator } from "../atoms/DotIndicator";

export const Sidebar = ({ user, activeNav, onNavClick }) => {
  const [expandedSections, setExpandedSections] = useState(["design-system"]);

  const toggleSection = (section) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section],
    );
  };

  return (
    <div className="w-72 bg-gray-50 border-r border-gray-200 flex flex-col h-full">
      {/* User Profile */}
      <div className="p-4 border-b border-gray-200">
        <UserProfile name={user.name} avatar={user.avatar} role={user.role} />
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Workspace Section */}
        <div className="mb-6">
          <Text
            variant="tiny"
            className="uppercase font-semibold mb-2 px-2 tracking-wide"
          >
            Workspace
          </Text>
          <div className="space-y-1">
            <NavItem
              icon="home"
              label="Home"
              active={activeNav === "home"}
              onClick={() => onNavClick("home")}
            />
            <NavItem
              icon="users"
              label="Team"
              active={activeNav === "team"}
              onClick={() => onNavClick("team")}
            />
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-6">
          <Text
            variant="tiny"
            className="uppercase font-semibold mb-2 px-2 tracking-wide"
          >
            Projects
          </Text>
          <div className="space-y-1">
            <NavItem
              icon="layers"
              label="Design System"
              active={activeNav === "design-system"}
              onClick={() => {
                onNavClick("design-system");
                toggleSection("design-system");
              }}
            />

            {expandedSections.includes("design-system") && (
              <div className="ml-2 space-y-1">
                <SubNavItem label="Documentation" />
                <SubNavItem label="Components" />
                <SubNavItem label="Tokens" />
              </div>
            )}

            <NavItem
              icon="barChart"
              label="Marketing"
              active={activeNav === "marketing"}
              onClick={() => onNavClick("marketing")}
            />
            <SubNavItem label="Q3_Assets" />
          </div>
        </div>

        {/* Tags Section */}
        <div>
          <Text
            variant="tiny"
            className="uppercase font-semibold mb-2 px-2 tracking-wide"
          >
            Tags
          </Text>
          <div className="space-y-1">
            <div className="flex items-center gap-2 px-4 py-2">
              <DotIndicator color="purple" />
              <Text variant="small">Urgent</Text>
            </div>
            <div className="flex items-center gap-2 px-4 py-2">
              <DotIndicator color="gray" />
              <Text variant="small">Reviewed</Text>
            </div>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="p-4 border-t border-gray-200">
        <NavItem
          icon="settings"
          label="Settings"
          active={activeNav === "settings"}
          onClick={() => onNavClick("settings")}
        />
      </div>
    </div>
  );
};
