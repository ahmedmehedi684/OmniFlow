import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import SocialPosts from './pages/SocialPosts';
import WorkflowManager from './pages/WorkflowManager';
import UnifiedInbox from './pages/UnifiedInbox';
import ArchitectureDocs from './pages/ArchitectureDocs';
import Settings from './pages/Settings';
import Connections from './pages/Connections';
import { NavPage, Platform, SocialConnection } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<NavPage>(NavPage.DASHBOARD);
  
  // Centralized Social Connection State
  const [connections, setConnections] = useState<SocialConnection[]>([
    { platform: Platform.FACEBOOK, isConnected: true, username: 'OmniFlow Page' },
    { platform: Platform.INSTAGRAM, isConnected: true, username: '@omniflow_app' },
    { platform: Platform.LINKEDIN, isConnected: false },
    { platform: Platform.TWITTER, isConnected: false },
    { platform: Platform.TIKTOK, isConnected: false },
    { platform: Platform.YOUTUBE, isConnected: false },
  ]);

  const handleToggleConnection = (platform: Platform) => {
    setConnections(prev => prev.map(c => {
      if (c.platform === platform) {
        const newConnectedState = !c.isConnected;
        return {
          ...c,
          isConnected: newConnectedState,
          username: newConnectedState ? getMockUsername(platform) : undefined
        };
      }
      return c;
    }));
  };

  const getMockUsername = (p: Platform) => {
    switch(p) {
      case Platform.FACEBOOK: return 'OmniFlow Page';
      case Platform.INSTAGRAM: return '@omniflow_app';
      case Platform.LINKEDIN: return 'Alex Entrepreneur';
      case Platform.TWITTER: return '@alex_omni';
      case Platform.TIKTOK: return '@omniflow_official';
      case Platform.YOUTUBE: return 'OmniFlow Channel';
      default: return 'User';
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case NavPage.DASHBOARD:
        return <Dashboard />;
      case NavPage.CONNECTIONS:
        return <Connections connections={connections} onToggleConnection={handleToggleConnection} />;
      case NavPage.SOCIAL:
        return <SocialPosts connections={connections} />;
      case NavPage.WORKFLOWS:
        return <WorkflowManager />;
      case NavPage.INBOX:
        return <UnifiedInbox />;
      case NavPage.DOCS:
        return <ArchitectureDocs />;
      case NavPage.SETTINGS:
        return <Settings />;
      case NavPage.CUSTOMERS:
        return (
          <div className="flex items-center justify-center h-96 flex-col text-slate-400">
            <h2 className="text-2xl font-bold text-slate-300 mb-2">Customer Database</h2>
            <p>Feature coming in next sprint.</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
};

export default App;