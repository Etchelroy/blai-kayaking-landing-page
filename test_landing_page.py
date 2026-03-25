import pytest
from unittest.mock import patch, MagicMock
import json

class TestEmailValidation:
    """Email validation function tests"""
    
    def test_valid_email_formats(self):
        """Verify valid email patterns are accepted"""
        valid_emails = [
            'user@example.com',
            'john.doe+tag@domain.co.uk',
            'test123@subdomain.example.org'
        ]
        # JavaScript test via eval or Selenium would validate
        # For Python: implement equivalent function
        assert all(is_valid_email(email) for email in valid_emails)
    
    def test_invalid_email_formats(self):
        """Verify invalid email patterns are rejected"""
        invalid_emails = [
            'plaintext',
            '@example.com',
            'user@',
            'user @example.com',
            'user@example',
        ]
        assert all(not is_valid_email(email) for email in invalid_emails)
    
    def test_empty_email(self):
        """Empty email string should fail validation"""
        assert not is_valid_email('')
    
    def test_email_with_spaces(self):
        """Emails with spaces should fail"""
        assert not is_valid_email('user @example.com')


class TestPhoneValidation:
    """Phone number validation function tests"""
    
    def test_valid_us_phone_formats(self):
        """Verify valid US phone formats accepted"""
        valid_phones = [
            '5550123456',
            '(555) 012-3456',
            '+1-555-012-3456',
            '555.012.3456'
        ]
        assert all(is_valid_phone(phone) for phone in valid_phones)
    
    def test_invalid_phone_formats(self):
        """Verify invalid phone formats rejected"""
        invalid_phones = [
            '123',  # Too short
            'abcdefghij',  # Letters only
            '',  # Empty
            '   ',  # Spaces only
        ]
        assert all(not is_valid_phone(phone) for phone in invalid_phones)
    
    def test_phone_with_international_prefix(self):
        """International phone numbers should pass"""
        assert is_valid_phone('+44 20 7946 0958')
    
    def test_phone_minimum_length(self):
        """Phone must be at least 10 characters"""
        assert not is_valid_phone('55501234')  # 8 digits


class TestFormValidation:
    """Complete form validation flow"""
    
    def test_booking_form_required_fields(self):
        """All required fields must be present"""
        incomplete_booking = {
            'fullName': '',
            'email': 'test@example.com',
            'phone': '5550123456'
        }
        assert not validate_booking_form(incomplete_booking)
    
    def test_complete_valid_booking(self):
        """Complete valid booking passes all checks"""
        valid_booking = {
            'fullName': 'John Doe',
            'email': 'john@example.com',
            'phone': '5550123456',
            'date': '2024-12-25',
            'tour': 'mountain-lake',
            'participants': '2',
            'experience': 'beginner',
            'terms': True
        }
        assert validate_booking_form(valid_booking)
    
    def test_booking_with_invalid_email(self):
        """Booking with invalid email fails"""
        booking = {
            'fullName': 'John Doe',
            'email': 'invalid-email',
            'phone': '5550123456',
            'date': '2024-12-25',
            'tour': 'mountain-lake',
            'participants': '1',
            'experience': 'beginner',
            'terms': True
        }
        assert not validate_booking_form(booking)
    
    def test_booking_without_terms_acceptance(self):
        """Booking without terms acceptance fails"""
        booking = {
            'fullName': 'John Doe',
            'email': 'john@example.com',
            'phone': '5550123456',
            'date': '2024-12-25',
            'tour': 'mountain-lake',
            'participants': '1',
            'experience': 'beginner',
            'terms': False
        }
        assert not validate_booking_form(booking)
    
    def test_booking_with_invalid_participant_count(self):
        """Participant count must be 1-12"""
        booking = {
            'fullName': 'John Doe',
            'email': 'john@example.com',
            'phone': '5550123456',
            'date': '2024-12-25',
            'tour': 'mountain-lake',
            'participants': '15',  # Exceeds max
            'experience': 'beginner',
            'terms': True
        }
        assert not validate_booking_form(booking)


class TestLocalStorageBooking:
    """localStorage booking persistence tests"""
    
    @patch('builtins.open', create=True)
    def test_booking_saved_to_storage(self, mock_open):
        """Booking data saved to localStorage"""
        booking = {
            'fullName': 'Jane Smith',
            'email': 'jane@example.com',
            'phone': '5551234567',
            'date': '2024-12-20',
            'tour': 'coastal-sunset',
            'participants': '3',
            'experience': 'intermediate',
            'timestamp': '2024-01-15T10:30:00Z'
        }
        save_booking(booking)
        # Verify localStorage call was made
        mock_open.assert_called()
    
    def test_multiple_bookings_preserved(self):
        """Multiple bookings stored without overwriting"""
        booking1 = {'fullName': 'John', 'email': 'john@example.com'}
        booking2 = {'fullName': 'Jane', 'email': 'jane@example.com'}
        
        save_booking(booking1)
        save_booking(booking2)
        
        bookings = load_bookings()
        assert len(bookings) == 2
        assert bookings[0]['fullName'] == 'John'
        assert bookings[1]['fullName'] == 'Jane'


class TestAccessibility:
    """WCAG AA compliance tests"""
    
    def test_skip_to_content_link_present(self):
        """Page must have skip-to-content link"""
        assert has_skip_link()
    
    def test_form_labels_associated(self):
        """All form inputs must have associated labels"""
        form_inputs = get_form_inputs()
        for input_field in form_inputs:
            assert input_field.get_associated_label() is not None
    
    def test_focus_visible_on_interactive_elements(self):
        """Interactive elements must show focus ring"""
        buttons = get_all_buttons()
        for button in buttons:
            assert button.has_focus_style()
    
    def test_aria_expanded_toggles(self):
        """FAQ accordion buttons must toggle aria-expanded"""
        faq_buttons = get_faq_buttons()
        for button in faq_buttons:
            assert button.has_aria_expanded_attribute()
    
    def test_image_alt_text_present(self):
        """All images must have descriptive alt text"""
        images = get_all_images()
        for img in images:
            assert img.get_alt_text() and len(img.get_alt_text()) > 10
    
    def test_contrast_ratio_minimum(self):
        """Text must meet 4.5:1 contrast ratio minimum"""
        text_elements = get_text_elements()
        for element in text_elements:
            assert get_contrast_ratio(element) >= 4.5
    
    def test_keyboard_navigation_faq(self):
        """FAQ must be navigable with keyboard"""
        faq = get_faq_accordion()
        assert faq.is_navigable_with_tab()
        assert faq.is_navigable_with_arrow_keys()


class TestResponsiveDesign:
    """Responsive layout tests at breakpoints"""
    
    def test_mobile_layout_640px(self):
        """Layout correct at 640px breakpoint"""
        viewport = resize_viewport(640, 800)
        tours_grid = get_tours_grid()
        assert tours_grid.get_column_count() == 2
    
    def test_tablet_layout_1024px(self):
        """Layout correct at 1024px breakpoint"""
        viewport = resize_viewport(1024, 768)
        tours_grid = get_tours_grid()
        assert tours_grid.get_column_count() == 4
    
    def test_touch_target_minimum_size(self):
        """Touch targets minimum 44x48px on mobile"""
        buttons = get_all_buttons()
        for button in buttons:
            width, height = button.get_dimensions()
            assert width >= 44 and height >= 44
    
    def test_navbar_sticky_on_scroll(self):
        """Navbar remains visible when scrolling"""
        scroll_page(500)
        navbar = get_navbar()
        assert navbar.is_visible()
        assert navbar.get_position