import { motion } from 'framer-motion';
import Section from '../components/Section';
import { FiLayers, FiUser, FiShield, FiClock, FiBookOpen, FiSettings, FiAlertCircle, FiActivity } from 'react-icons/fi';

const QuizApplicationDetails = () => {
  const listItem = (text: string) => (
    <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-moonlight-cyan" /> <span className="text-gray-300 leading-relaxed">{text}</span></li>
  );

  return (
    <div className="pt-20">
      <Section>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-16">
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">QuizApplication <span className="gradient-text">Feature Guide</span></h1>
              <p className="text-lg text-gray-400 leading-relaxed">A web-based MCQ quiz & practice platform built with <span className="text-moonlight-cyan font-semibold">ASP.NET Core MVC</span> + <span className="text-moonlight-purple font-semibold">Entity Framework Core</span>. Supports timed quizzes, practice mode, user-created custom quizzes, score tracking & role-based administration.</p>
              <div className="flex flex-wrap gap-3">
                {['ASP.NET Core MVC','EF Core','SQL Server','Role Based','Custom Quizzes','Practice Mode'].map(t => (
                  <span key={t} className="px-3 py-1 rounded-full text-sm bg-primary/10 border border-primary/20 text-primary">{t}</span>
                ))}
              </div>
            </div>
            <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-moonlight-blue/30 to-moonlight-purple/30 blur-3xl rounded-2xl" />
              <img src="/Quiz.png" alt="Quiz Application" className="relative rounded-2xl w-full shadow-xl ring-1 ring-moonlight-cyan/30" />
            </motion.div>
          </div>

          {/* Roles */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold flex items-center gap-3"><FiUser className="text-moonlight-cyan" /> User Roles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-effect p-6 rounded-xl border border-moonlight-cyan/20">
                <h3 className="font-semibold mb-2">Guest</h3>
                <p className="text-sm text-gray-400">Access login / register only.</p>
              </div>
              <div className="glass-effect p-6 rounded-xl border border-primary/20">
                <h3 className="font-semibold mb-2">User</h3>
                <p className="text-sm text-gray-400">Timed quizzes, practice, create & take custom quizzes, track history, edit profile.</p>
              </div>
              <div className="glass-effect p-6 rounded-xl border border-moonlight-purple/30">
                <h3 className="font-semibold mb-2">Admin</h3>
                <p className="text-sm text-gray-400">All user abilities + manage users, categories, questions & view system stats.</p>
              </div>
            </div>
          </div>

          {/* Core Modules */}
          <div className="space-y-10">
            <h2 className="text-3xl font-bold flex items-center gap-3"><FiLayers className="text-primary" /> Core Modules & Features</h2>
            <div className="space-y-8">
              <div className="glass-effect p-6 rounded-xl space-y-3 border border-moonlight-cyan/20">
                <h3 className="text-xl font-semibold flex items-center gap-2"><FiShield /> Authentication & Profile</h3>
                <ul className="space-y-1 text-sm">{[
                  'Register (username, email, hashed password)',
                  'Login via username/email + password',
                  'Session-based auth (UserId, Username, Role)',
                  'Profile edit incl. password change (with current password validation)',
                  'Logout clears session'
                ].map(listItem)}</ul>
              </div>

              <div className="glass-effect p-6 rounded-xl space-y-3 border border-primary/20">
                <h3 className="text-xl font-semibold flex items-center gap-2"><FiActivity /> Dashboard</h3>
                <ul className="space-y-1 text-sm">{[
                  'Separate User & Admin dashboards',
                  'User: quiz stats, available categories, pending assigned custom quizzes (auto-mark viewed)',
                  'Admin: users count, role distribution, categories, questions, quiz sessions'
                ].map(listItem)}</ul>
              </div>

              <div className="glass-effect p-6 rounded-xl space-y-3 border border-moonlight-purple/20">
                <h3 className="text-xl font-semibold flex items-center gap-2"><FiClock /> Standard Timed Quiz Flow</h3>
                <ul className="space-y-1 text-sm">{[
                  'Configure quiz: title, #questions, time, categories, difficulty',
                  'Create QuizSessions row (stores selected categories/options)',
                  'Questions order fixed per session',
                  'Navigate questions, auto-complete on time expiry',
                  'Result page with per-question breakdown',
                  'AJAX endpoints: SaveAnswer, GetQuestion(s)'
                ].map(listItem)}</ul>
              </div>

              <div className="glass-effect p-6 rounded-xl space-y-3 border border-accent/30">
                <h3 className="text-xl font-semibold flex items-center gap-2"><FiBookOpen /> Practice Mode</h3>
                <ul className="space-y-1 text-sm">{[
                  'Filter by category / difficulty / mixed',
                  'Random question per request',
                  'Instant correctness feedback via JSON',
                  'Lightweight skill sharpening (no persistence)'
                ].map(listItem)}</ul>
              </div>

              <div className="glass-effect p-6 rounded-xl space-y-3 border border-moonlight-cyan/30">
                <h3 className="text-xl font-semibold flex items-center gap-2"><FiSettings /> Custom Quizzes</h3>
                <ul className="space-y-1 text-sm">{[
                  'Create quiz (title, description, time, public/private)',
                  'Add ordered MCQs (custom, no category tags)',
                  'Assign to users (creator/admin only)',
                  'Public: all users; Private: creator/admin/assigned',
                  'Full ordered list taking experience',
                  'Results include completion status & scores',
                  'Soft delete via IsActive',
                  'Notifications for newly assigned quizzes'
                ].map(listItem)}</ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-effect p-6 rounded-xl space-y-3 border border-primary/30">
                  <h3 className="text-lg font-semibold">Question Bank Management</h3>
                  <ul className="space-y-1 text-sm">{[
                    'Create MCQs with category & difficulty',
                    'Optional image (≤5MB) stored inline',
                    'Edit retaining existing image if not replaced',
                    'AJAX image removal',
                    'Hard delete questions'
                  ].map(listItem)}</ul>
                </div>
                <div className="glass-effect p-6 rounded-xl space-y-3 border border-moonlight-purple/30">
                  <h3 className="text-lg font-semibold">Categories Management</h3>
                  <ul className="space-y-1 text-sm">{[
                    'Create / edit / delete categories',
                    'Prevent case-insensitive duplicates',
                    'Guard against deleting categories in use'
                  ].map(listItem)}</ul>
                </div>
                <div className="glass-effect p-6 rounded-xl space-y-3 border border-accent/30 md:col-span-2">
                  <h3 className="text-lg font-semibold">Users Management</h3>
                  <ul className="space-y-1 text-sm">{[
                    'List, create, edit, delete users',
                    'Adjust roles',
                    'SHA256 hashing (upgrade path possible)'
                  ].map(listItem)}</ul>
                </div>
              </div>

              <div className="glass-effect p-6 rounded-xl space-y-3 border border-secondary/30">
                <h3 className="text-xl font-semibold">Quiz History & Continuation</h3>
                <ul className="space-y-1 text-sm">{[
                  'View past quiz sessions',
                  'Continue incomplete sessions if time remains',
                  'Expired auto-mark completed',
                  'AJAX details summary (GetSessionDetails)'
                ].map(listItem)}</ul>
              </div>

              <div className="glass-effect p-6 rounded-xl space-y-3 border border-moonlight-cyan/30">
                <h3 className="text-xl font-semibold">Images Handling</h3>
                <ul className="space-y-1 text-sm">{[
                  'Served via dedicated endpoints',
                  'Binary stored directly (no external FS)'
                ].map(listItem)}</ul>
              </div>
            </div>
          </div>

          {/* Data Models */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Data Models (Simplified)</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ['Users','Id, Username, Email, PasswordHash, Role'],
                ['Categories','CategoryId, CategoryName'],
                ['Questions','QuestionId, Text, Options1-4, CorrectedOption, DifficultyLevel, CategoryId, Image'],
                ['QuizSessions','SessionId, UserId, Start/EndTime, IsCompleted, TimeLimit, NumberOfQuestions, DifficultyLevel, SelectedCategories(JSON), QuizTitle, TotalScore'],
                ['UserAnswers','AnswerId, SessionId, QuestionId, SelectedOption, IsCorrect, TimeTaken'],
                ['UserCustomQuiz','UserQuizId, Title, Description, TimeLimit, CreatedByUserId, IsPublic, IsActive, CreatedDate'],
                ['UserCustomQuizQuestion','QuestionId, UserQuizId, QuestionText, Options, CorrectAnswer, Order'],
                ['UserCustomQuizAssignment','AssignmentId, UserQuizId, AssignedToUserId, AssignedDate, IsCompleted, IsViewed, Score, CompletedDate'],
                ['UserCustomQuizAnswer','AnswerId, AssignmentId, QuestionId, SelectedAnswer, IsCorrect']
              ].map(([title, fields]) => (
                <div key={title} className="glass-effect p-4 rounded-lg border border-primary/10">
                  <h4 className="font-semibold text-primary mb-1 text-sm">{title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{fields}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Journeys */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Typical User Journeys</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-effect p-6 rounded-xl border border-moonlight-cyan/20 space-y-2">
                <h3 className="font-semibold">New Learner</h3>
                <ul className="text-sm space-y-1">{[
                  'Register & login',
                  'Visit dashboard',
                  'Start Practice',
                  'Take timed quiz & review results',
                  'View history for tracking'
                ].map(listItem)}</ul>
              </div>
              <div className="glass-effect p-6 rounded-xl border border-primary/20 space-y-2">
                <h3 className="font-semibold">Power User / Creator</h3>
                <ul className="text-sm space-y-1">{[
                  'Create custom quiz',
                  'Add questions & assign / mark public',
                  'Monitor completions & scores'
                ].map(listItem)}</ul>
              </div>
              <div className="glass-effect p-6 rounded-xl border border-moonlight-purple/20 space-y-2">
                <h3 className="font-semibold">Admin</h3>
                <ul className="text-sm space-y-1">{[
                  'Dashboard stats',
                  'Create categories & populate question bank',
                  'Monitor usage',
                  'Manage users'
                ].map(listItem)}</ul>
              </div>
            </div>
          </div>

          {/* Access Rules */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Access & Authorization</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-sm">{[
              'Auth required for most actions',
              'Admin-only: question bank, categories CRUD, user CRUD',
              'Custom quiz visibility: creator/admin/assigned or public',
              'Edit/delete custom quiz questions: creator/admin only'
            ].map(listItem)}</ul>
          </div>

          {/* Validation & Security */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-2"><FiAlertCircle className="text-accent" /> Validation & Errors</h2>
              <ul className="space-y-1 text-sm">{[
                'Duplicate category names blocked',
                'Image size/type validated',
                'Must pick at least one category during quiz setup',
                'Cannot assign custom quiz with zero questions',
                'Password & email validation on updates/registration'
              ].map(listItem)}</ul>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-2"><FiShield className="text-moonlight-cyan" /> Security Notes</h2>
              <ul className="space-y-1 text-sm">{[
                'SHA256 hashing (upgrade path: salted PBKDF2/bcrypt/Argon2)',
                'Secure cookies recommended in production',
                'Image validation prevents oversized uploads',
                'Server-side role checks enforced'
              ].map(listItem)}</ul>
            </div>
          </div>

          {/* Performance & Improvements */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Performance & Scalability</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-sm">{[
              'Random selection uses Guid.NewGuid() shuffle (adequate for small sets)',
              'Practice mode loads filtered set then samples in memory',
              'Question order stored in session (could persist for resilience)'
            ].map(listItem)}</ul>
            <h2 className="text-3xl font-bold">Future Improvements</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-sm">{[
              'Pagination & search for listings',
              'Analytics: accuracy by category/difficulty',
              'Email notifications for assignments',
              'Upgrade password hashing algo',
              'Role-based claims & ASP.NET Identity',
              'Track time per custom quiz question'
            ].map(listItem)}</ul>
          </div>

          {/* How To Use */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">How To Use (Quick Steps)</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-effect p-6 rounded-xl space-y-2 border border-primary/20">
                  <h3 className="font-semibold">Start a Timed Quiz</h3>
                  <ul className="text-sm space-y-1">{[
                    'Quiz → Setup',
                    'Fill title, time, #questions, categories, difficulty',
                    'Answer sequentially → Finish → Review breakdown'
                  ].map(listItem)}</ul>
                </div>
                <div className="glass-effect p-6 rounded-xl space-y-2 border border-moonlight-cyan/20">
                  <h3 className="font-semibold">Practice Mode</h3>
                  <ul className="text-sm space-y-1">{[
                    'Practice → Setup',
                    'Select filters & get random question',
                    'Submit answer → instant feedback'
                  ].map(listItem)}</ul>
                </div>
                <div className="glass-effect p-6 rounded-xl space-y-2 border border-moonlight-purple/30">
                  <h3 className="font-semibold">Create Custom Quiz</h3>
                  <ul className="text-sm space-y-1">{[
                    'Custom Quiz → Create',
                    'Add questions & assign / mark public',
                    'Users take quiz → scores tracked'
                  ].map(listItem)}</ul>
                </div>
                <div className="glass-effect p-6 rounded-xl space-y-2 border border-accent/30">
                  <h3 className="font-semibold">Manage Questions (Admin)</h3>
                  <ul className="text-sm space-y-1">{[
                    'Create/Edit/Delete with images',
                    'Maintain categories separately'
                  ].map(listItem)}</ul>
                </div>
                <div className="glass-effect p-6 rounded-xl space-y-2 border border-secondary/30 md:col-span-2">
                  <h3 className="font-semibold">View History / Continue</h3>
                  <ul className="text-sm space-y-1">{[
                    'Dashboard → Quiz History',
                    'Open session → details via AJAX',
                    'Continue if time remains'
                  ].map(listItem)}</ul>
                </div>
              </div>
            </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default QuizApplicationDetails;
