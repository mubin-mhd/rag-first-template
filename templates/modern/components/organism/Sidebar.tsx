"use client";

import { useState } from "react";
import { UserProfile } from "../molecules/UserProfile";
import { NavItem } from "../molecules/NavItem";
import { SubNavItem } from "../molecules/SubNavItem";
import { Text } from "../atoms/Text";
import { DotIndicator } from "../atoms/DotIndicator";

export const Sidebar = ({ user, activeNav, onNavClick, t }) => {
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
      <div className="p-4 border-b border-gray-200">
        <UserProfile name={user.name} avatar={user.avatar} role={user.role} />
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-6">
          <Text
            variant="tiny"
            className="uppercase font-semibold mb-2 px-2 tracking-wide"
          >
            {t("sidebar.section.workspace")}
          </Text>
          <div className="space-y-1">
            <NavItem
              icon="home"
              label={t("sidebar.nav.home")}
              active={activeNav === "home"}
              onClick={() => onNavClick("home")}
            />
            <NavItem
              icon="users"
              label={t("sidebar.nav.team")}
              active={activeNav === "team"}
              onClick={() => onNavClick("team")}
            />
          </div>
        </div>

        <div className="mb-6">
          <Text
            variant="tiny"
            className="uppercase font-semibold mb-2 px-2 tracking-wide"
          >
            {t("sidebar.section.projects")}
          </Text>
          <div className="space-y-1">
            <NavItem
              icon="layers"
              label={t("sidebar.nav.designSystem")}
              active={activeNav === "design-system"}
              onClick={() => {
                onNavClick("design-system");
                toggleSection("design-system");
              }}
            />

            {expandedSections.includes("design-system") && (
              <div className="ml-2 space-y-1">
                <SubNavItem label={t("sidebar.subnav.documentation")} />
                <SubNavItem label={t("sidebar.subnav.components")} />
                <SubNavItem label={t("sidebar.subnav.tokens")} />
              </div>
            )}

            <NavItem
              icon="barChart"
              label={t("sidebar.nav.marketing")}
              active={activeNav === "marketing"}
              onClick={() => onNavClick("marketing")}
            />
            <SubNavItem label={t("sidebar.subnav.q3Assets")} />
          </div>
        </div>

        <div>
          <Text
            variant="tiny"
            className="uppercase font-semibold mb-2 px-2 tracking-wide"
          >
            {t("sidebar.section.tags")}
          </Text>
          <div className="space-y-1">
            <div className="flex items-center gap-2 px-4 py-2">
              <DotIndicator color="purple" />
              <Text variant="small">{t("sidebar.tag.urgent")}</Text>
            </div>
            <div className="flex items-center gap-2 px-4 py-2">
              <DotIndicator color="gray" />
              <Text variant="small">{t("sidebar.tag.reviewed")}</Text>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <NavItem
          icon="settings"
          label={t("sidebar.nav.settings")}
          active={activeNav === "settings"}
          onClick={() => onNavClick("settings")}
        />
      </div>
    </div>
  );
};
