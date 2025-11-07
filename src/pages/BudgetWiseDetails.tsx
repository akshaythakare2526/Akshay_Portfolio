import { motion } from 'framer-motion';
import Section from '../components/Section';
import { FiShield, FiUsers, FiTrendingUp, FiCloud, FiServer, FiSmartphone, FiLock, FiDatabase, FiSettings, FiCheckCircle } from 'react-icons/fi';

const BudgetWiseDetails = () => {
  const listItem = (text: string) => (
    <li className="flex items-start gap-2">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-moonlight-cyan flex-shrink-0" />
      <span className="text-gray-300 leading-relaxed">{text}</span>
    </li>
  );

  return (
    <div className="pt-20 pb-16">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-20"
        >
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full border border-moonlight-cyan/30">
                <span className="text-sm font-semibold text-moonlight-cyan">Version 1.0.0</span>
                <span className="text-gray-500">•</span>
                <span className="text-sm text-gray-400">Nov 7, 2025</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                BudgetWise <span className="gradient-text">Expense Tracker</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                A secure, offline-capable mobile expense & group-budget app built with <span className="text-moonlight-cyan font-semibold">React Native + Expo</span>, backed by a Clean-Architecture REST API using <span className="text-moonlight-purple font-semibold">ASP.NET Core 9.0 + EF Core</span> that supports personal and group finance workflows, JWT + biometric auth, and rich analytics.
              </p>

              <div className="flex flex-wrap gap-3">
                {['React Native', 'Expo', 'ASP.NET Core 9.0', 'EF Core', 'Clean Architecture', 'CQRS', 'Offline-First', 'JWT Auth', 'Biometric'].map((tech) => (
                  <span key={tech} className="px-4 py-2 text-sm bg-primary/10 border border-primary/20 text-primary rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <p className="text-gray-400 italic">
                  "Make expense tracking and group budgeting effortless and secure — online or offline."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-moonlight-blue/30 via-moonlight-purple/20 to-accent/30 blur-3xl rounded-3xl" />
              <div className="relative glass-effect p-8 rounded-2xl border border-moonlight-cyan/20">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop"
                  alt="BudgetWise"
                  className="rounded-xl w-full shadow-2xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Core Value */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              What <span className="gradient-text">BudgetWise</span> Does
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: FiTrendingUp, title: 'Track Expenses', desc: 'Personal and group expenses & deposits with categorization' },
                { icon: FiUsers, title: 'Group Budgeting', desc: 'Create/join groups, switch context, view group-specific balances' },
                { icon: FiCloud, title: 'Offline Support', desc: 'Queue & sync operations, works seamlessly without network' },
                { icon: FiShield, title: 'Secure & Smart', desc: 'Biometric login, email OTP, JWT auth, and data exports' }
              ].map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-effect p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all"
                >
                  <feature.icon className="text-moonlight-cyan mb-4" size={32} />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="glass-effect p-6 rounded-xl border border-accent/20">
              <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                <FiCheckCircle className="text-accent" />
                Key Capabilities
              </h3>
              <ul className="grid md:grid-cols-2 gap-2 text-sm">
                {[
                  'Interactive charts (pie/line) with category breakdowns',
                  'Export to CSV, Excel, and PDF formats',
                  'High-usage alerts and spending insights',
                  'Password-protected groups with unique codes',
                  'Auto-sync with optimistic UI updates',
                  'Dark/Light theme support'
                ].map(listItem)}
              </ul>
            </div>
          </motion.div>

          {/* Architecture */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              High-Level <span className="gradient-text">Architecture</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-xl border border-moonlight-cyan/30"
              >
                <div className="flex items-center gap-3 mb-6">
                  <FiSmartphone className="text-moonlight-cyan" size={32} />
                  <h3 className="text-2xl font-bold">Mobile Client</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {[
                    'React Native + Expo for cross-platform mobile',
                    'Modular screens: Splash → Home → Login/Register → Dashboard',
                    'Tab Navigator: Dashboard, Transactions, Analytics, Profile',
                    'Animated splash with brand identity',
                    'Dark/Light theme switching',
                    'Offline-first with AsyncStorage caching',
                    'Biometric authentication support',
                    'Pull-to-refresh and optimistic UI updates'
                  ].map(listItem)}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-xl border border-moonlight-purple/30"
              >
                <div className="flex items-center gap-3 mb-6">
                  <FiServer className="text-moonlight-purple" size={32} />
                  <h3 className="text-2xl font-bold">REST API Backend</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {[
                    'ASP.NET Core 9.0 Web API',
                    'Clean Architecture with clear separation of concerns',
                    'CQRS pattern via MediatR (Commands & Queries)',
                    'FluentValidation for input validation',
                    'Entity Framework Core 9.0.6 + SQL Server',
                    'JWT Bearer Authentication with token blacklisting',
                    'SMTP email service for OTP flows',
                    'In-memory OTP cache with expiration'
                  ].map(listItem)}
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-xl border border-accent/20"
            >
              <h3 className="font-semibold text-xl mb-4">Architecture Layers</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Presentation</h4>
                  <p className="text-gray-400">API Controllers delegate to MediatR handlers</p>
                </div>
                <div>
                  <h4 className="font-semibold text-moonlight-cyan mb-2">Application</h4>
                  <p className="text-gray-400">Business logic, validation, DTOs, CQRS handlers</p>
                </div>
                <div>
                  <h4 className="font-semibold text-moonlight-purple mb-2">Infrastructure</h4>
                  <p className="text-gray-400">EF Core, SMTP, token blacklist storage</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Key UX Flows */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Key <span className="gradient-text">User Flows</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Onboarding',
                  steps: ['Animated Splash Screen', 'Home/Welcome Screen', 'Register with Email OTP Verification', 'Auto-login after verification', 'Navigate to Dashboard']
                },
                {
                  title: 'Login & Authentication',
                  steps: ['Username/Password Login', 'Optional Biometric Login (if enabled)', 'Fetch user profile + groups', 'Navigate to Dashboard', 'Token stored securely']
                },
                {
                  title: 'Add Expense/Deposit',
                  steps: ['Tap Floating (+) Button', 'Quick form with category selection', 'Save locally if offline', 'Auto-sync when online', 'Optimistic UI update']
                },
                {
                  title: 'Group Management',
                  steps: ['Create Group (auto-join as creator)', 'Join via unique code + password', 'Switch active group context', 'All transactions scoped to active group', 'View group analytics']
                },
                {
                  title: 'Password Reset',
                  steps: ['Request OTP via email', 'Email Verification screen', 'Enter OTP code', 'Set new password', 'Auto-login']
                },
                {
                  title: 'Profile & Settings',
                  steps: ['Edit user profile details', 'Manage groups (view/leave)', 'Toggle biometric authentication', 'Export data (CSV/Excel/PDF)', 'Logout with token blacklist']
                }
              ].map((flow, idx) => (
                <motion.div
                  key={flow.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-effect p-6 rounded-xl border border-primary/20"
                >
                  <h3 className="font-semibold text-lg mb-4 text-primary">{flow.title}</h3>
                  <ol className="space-y-2">
                    {flow.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-moonlight-cyan/20 text-moonlight-cyan flex items-center justify-center text-xs font-semibold">
                          {i + 1}
                        </span>
                        <span className="text-gray-300 leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Offline & Sync */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Offline-First <span className="gradient-text">Sync Strategy</span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-xl border border-moonlight-cyan/30"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <FiDatabase className="text-moonlight-cyan" />
                    Local Cache
                  </h3>
                  <ul className="space-y-1 text-sm">
                    {['User profile', 'Transactions', 'Groups', 'Categories', 'Settings'].map(listItem)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <FiSettings className="text-moonlight-purple" />
                    Operation Queue
                  </h3>
                  <ul className="space-y-1 text-sm">
                    {['Create/edit/delete operations', 'Queued while offline', 'Retry with exponential backoff', 'Server validation on sync'].map(listItem)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <FiCloud className="text-accent" />
                    Auto-Sync
                  </h3>
                  <ul className="space-y-1 text-sm">
                    {['Network status monitoring', 'Optimistic UI updates', 'Queue count indicator', 'Error toast notifications'].map(listItem)}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Security & Auth */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Security & <span className="gradient-text">Authentication</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-xl border border-moonlight-cyan/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FiLock className="text-moonlight-cyan" size={24} />
                  <h3 className="font-semibold text-xl">JWT Authentication</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {[
                    'JWT tokens with claims: UserId, Name, Email, Role, SwitchToGroup, GroupId',
                    'Configurable token validity (default 60 minutes)',
                    'Token blacklisting on logout',
                    'Secure token storage in mobile app',
                    'Group context encoded in token claims'
                  ].map(listItem)}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-xl border border-moonlight-purple/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FiShield className="text-moonlight-purple" size={24} />
                  <h3 className="font-semibold text-xl">Security Features</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {[
                    'Password hashing with configurable policies (min 6 chars)',
                    'Email OTP verification (expires in 15 minutes)',
                    'Biometric authentication with device capability check',
                    'Fallback to password if biometric fails',
                    'HTTPS enforcement for API communication'
                  ].map(listItem)}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* API Capabilities */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              API <span className="gradient-text">Endpoints</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Auth', endpoints: ['Login/Logout', 'Switch to Group', 'Send/Verify OTP', 'Password Reset', 'Change Password', 'Test Email'] },
                { title: 'Users', endpoints: ['Register', 'Get Profile', 'Update Profile', 'Admin User Mgmt'] },
                { title: 'Groups', endpoints: ['Create Group', 'Join Group', 'Get Groups', 'Update/Delete', 'Get Members/Count'] },
                { title: 'Expenses', endpoints: ['Create/Read', 'Update/Delete', 'User-scoped', 'Group-scoped'] },
                { title: 'Deposits', endpoints: ['Create/Read', 'Update/Delete', 'User-scoped', 'Group-scoped'] },
                { title: 'Categories', endpoints: ['List Categories', 'Admin CRUD', 'System Ping'] }
              ].map((api, idx) => (
                <motion.div
                  key={api.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="glass-effect p-5 rounded-xl border border-primary/20"
                >
                  <h3 className="font-semibold text-primary mb-3">/api/{api.title}</h3>
                  <ul className="space-y-1">
                    {api.endpoints.map((ep, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-moonlight-cyan" />
                        {ep}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="glass-effect p-6 rounded-xl border border-accent/20 text-center">
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-accent">CQRS Pattern:</span> Commands for writes, Queries for reads via MediatR
              </p>
            </div>
          </div>

          {/* Data Model */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Data <span className="gradient-text">Models</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { model: 'User', fields: 'Id, Name, UserName, Email, Phone, Role, IsActive, Groups' },
                { model: 'Group', fields: 'Id, GroupName, GroupCode (unique), Password, Users list' },
                { model: 'ExpenseRecord', fields: 'ExpenseId, Amount, Title, Description, AddedByUserId, CategoryID, IsGroupRelated, GroupId, IsDeleted' },
                { model: 'Deposit', fields: 'Similar to ExpenseRecord (income tracking)' },
                { model: 'Category', fields: 'CategoryId, CategoryName, Description' },
                { model: 'OtpEntity', fields: 'Id, Email, OtpCode, ExpiresAt, IsUsed' },
                { model: 'BlacklistedToken', fields: 'Id, Token, BlacklistedAt, ExpiresAt' }
              ].map((item, idx) => (
                <motion.div
                  key={item.model}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="glass-effect p-5 rounded-xl border border-primary/10"
                >
                  <h4 className="font-semibold text-primary mb-2">{item.model}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.fields}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Tech Stack & <span className="gradient-text">Infrastructure</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-effect p-6 rounded-xl border border-moonlight-cyan/30">
                <h3 className="font-semibold text-lg mb-4 text-moonlight-cyan">Mobile Stack</h3>
                <ul className="space-y-2 text-sm">
                  {['React Native + Expo SDK', 'Animated API for transitions', 'AsyncStorage for local persistence', 'React Navigation (Stack + Tab)', 'Axios for HTTP requests', 'Context API for state management'].map(listItem)}
                </ul>
              </div>

              <div className="glass-effect p-6 rounded-xl border border-moonlight-purple/30">
                <h3 className="font-semibold text-lg mb-4 text-moonlight-purple">Backend Stack</h3>
                <ul className="space-y-2 text-sm">
                  {['ASP.NET Core 9.0 Web API', 'Entity Framework Core 9.0.6', 'MediatR 12.5.0 (CQRS)', 'FluentValidation', 'SQL Server Database', 'SMTP via Gmail (MailKit recommended)'].map(listItem)}
                </ul>
              </div>

              <div className="glass-effect p-6 rounded-xl border border-accent/30 md:col-span-2">
                <h3 className="font-semibold text-lg mb-4 text-accent">Infrastructure & Hosting</h3>
                <ul className="grid md:grid-cols-2 gap-3 text-sm">
                  {['JWT Bearer Authentication', 'Keep-alive service pinging /api/ping', 'Environment configs for JWT/Email/DB', 'Retry logic on DB connections', 'Background job logging', 'HTTPS enforcement'].map(listItem)}
                </ul>
              </div>
            </div>
          </div>

          {/* UX/UI Highlights */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              UX/UI <span className="gradient-text">Highlights</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Animated branded splash screen',
                'Dark/Light theme switching',
                'Floating quick-action button',
                'Pull-to-refresh functionality',
                'Search & filter capabilities',
                'Adaptive status bar',
                'Custom toast notifications',
                'Avatar with deterministic colors',
                'Export modal (CSV/Excel/PDF)',
                'Offline/Network status bar',
                'Confirmation dialogs',
                'Loading states & skeletons'
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.03 }}
                  className="glass-effect p-4 rounded-lg border border-primary/10 text-center"
                >
                  <p className="text-sm text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Future Improvements */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Future <span className="gradient-text">Roadmap</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { priority: 'High', items: ['Push notifications for group events', 'Expense-splitting & settlement workflows', 'MailKit for improved email reliability', 'Role-based group admin features'] },
                { priority: 'Medium', items: ['Audit logs for all operations', 'Scheduled report generation', 'PDF export enhancements', 'Advanced analytics dashboard'] },
                { priority: 'Low', items: ['Multi-currency support', 'Receipt image uploads', 'Recurring expense templates', 'Budget planning tools'] }
              ].map((section, idx) => (
                <motion.div
                  key={section.priority}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-effect p-6 rounded-xl border border-moonlight-cyan/20"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      section.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                      section.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {section.priority} Priority
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {section.items.map(listItem)}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Development Notes */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Development <span className="gradient-text">Best Practices</span>
            </h2>

            <div className="glass-effect p-8 rounded-xl border border-accent/30">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-accent">Architecture Guidelines</h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      'Follow Clean Architecture principles',
                      'Controllers → MediatR → Handlers → Repositories',
                      'Use DTOs for all API communication',
                      'Implement FluentValidation for inputs',
                      'Async/await for all I/O operations',
                      'Dependency injection for all services'
                    ].map(listItem)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-moonlight-cyan">Security & Operations</h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      'OTPs cached non-persistently',
                      'Token blacklist persisted in database',
                      'Environment configs for secrets',
                      'Never commit secrets to repository',
                      'Enable retry logic on DB connections',
                      'Log background jobs for monitoring'
                    ].map(listItem)}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Project Info Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-4 pt-12 border-t border-gray-800"
          >
            <p className="text-gray-400">
              <span className="font-semibold text-white">Authors:</span> Akshay & Prem
            </p>
            <p className="text-sm text-gray-500">
              Last updated: November 7, 2025 • Version 1.0.0
            </p>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
};

export default BudgetWiseDetails;
